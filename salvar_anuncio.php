<?php
header('Content-Type: application/json');

// Diretório de upload
$uploadDir = __DIR__ . '/uploads';
if (!is_dir($uploadDir)) mkdir($uploadDir, 0755, true);

// Função auxiliar simples para responder erro
function jsonError($msg) {
    echo json_encode(['sucesso' => false, 'mensagem' => $msg]);
    exit;
}

// Dados do formulário
$nome = isset($_POST['nome']) ? trim($_POST['nome']) : null;
$email = isset($_POST['email']) ? trim($_POST['email']) : null;
$telefone = isset($_POST['telefone']) ? trim($_POST['telefone']) : null;
$titulo = isset($_POST['titulo']) ? trim($_POST['titulo']) : null;
$preco = isset($_POST['preco']) ? trim($_POST['preco']) : null;
$mensagem = isset($_POST['mensagem']) ? trim($_POST['mensagem']) : null;

if (!$nome || !$email || !$telefone || !$titulo) {
    jsonError('Campos obrigatórios faltando.');
}

// Trata arquivo se enviado
$imagemUrl = null;
if (isset($_FILES['imagem']) && $_FILES['imagem']['error'] === UPLOAD_ERR_OK) {
    $file = $_FILES['imagem'];
    $allowed = ['image/jpeg', 'image/png'];
    if (!in_array($file['type'], $allowed)) jsonError('Formato de imagem não suportado.');
    if ($file['size'] > 5 * 1024 * 1024) jsonError('Arquivo muito grande. Máx 5MB.');

    $ext = pathinfo($file['name'], PATHINFO_EXTENSION);
    $targetName = 'anuncio_' . time() . '_' . bin2hex(random_bytes(6)) . '.' . $ext;
    $targetPath = $uploadDir . '/' . $targetName;

    if (!move_uploaded_file($file['tmp_name'], $targetPath)) {
        jsonError('Falha ao salvar arquivo no servidor.');
    }
    // Salva caminho relativo para uso no front-end
    $imagemUrl = 'uploads/' . $targetName;
}

// Tenta salvar em banco se conexao.php estiver configurado
$salvo = false;
try {
    if (file_exists(__DIR__ . '/conexao.php')) {
        require_once __DIR__ . '/conexao.php';
        if (isset($pdo)) {
            $sql = "INSERT INTO anuncios (nome, email, telefone, titulo, preco, mensagem, imagem_url) VALUES (:nome, :email, :telefone, :titulo, :preco, :mensagem, :imagem_url)";
            $stmt = $pdo->prepare($sql);
            $stmt->execute([
                ':nome' => $nome,
                ':email' => $email,
                ':telefone' => $telefone,
                ':titulo' => $titulo,
                ':preco' => $preco,
                ':mensagem' => $mensagem,
                ':imagem_url' => $imagemUrl
            ]);
            $salvo = true;
        }
    }
} catch (Exception $e) {
    // fallback para arquivo
}

if (!$salvo) {
    // fallback: grava em arquivo JSON local
    $dbdir = __DIR__ . '/db';
    if (!is_dir($dbdir)) mkdir($dbdir, 0755, true);
    $filePath = $dbdir . '/anuncios.json';
    $lista = [];
    if (file_exists($filePath)) {
        $raw = file_get_contents($filePath);
        $lista = json_decode($raw, true) ?: [];
    }
    $lista[] = [
        'nome' => $nome,
        'email' => $email,
        'telefone' => $telefone,
        'titulo' => $titulo,
        'preco' => $preco,
        'mensagem' => $mensagem,
        'imagem_url' => $imagemUrl,
        'created_at' => date('Y-m-d H:i:s')
    ];
    file_put_contents($filePath, json_encode($lista, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
}

echo json_encode(['sucesso' => true, 'mensagem' => 'Anúncio recebido com sucesso', 'imagem' => $imagemUrl]);

?>