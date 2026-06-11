<?php
header("Content-Type: application/json");
require_once "conexao.php";

$dados = json_decode(file_get_contents("php://input"), true);

if (!$dados) {
    echo json_encode(["sucesso" => false, "mensagem" => "Dados inválidos."]);
    exit;
}

try {
    $precoLimpo = str_replace(['.', ','], ['', '.'], $dados['preco']);
    $precoDecimal = floatval(preg_replace('/[^0-9.]/', '', $precoLimpo));

    $sql = "INSERT INTO imoveis (
                titulo, finalidade, categoria, preco, localizacao, imagem_url, 
                quartos, banheiros, salas, cozinhas, garagem, area_total, area_construida, outros_comodos
            ) VALUES (
                :titulo, :finalidade, :categoria, :preco, :localizacao, :imagem_url, 
                :quartos, :banheiros, :salas, :cozinhas, :garagem, :area_total, :area_construida, :outros_comodos
            )";

    $stmt = $pdo->prepare($sql);

    $stmt->execute([
        ':titulo'         => $dados['titulo'],
        ':finalidade'     => $dados['finalidade'],
        ':categoria'      => $dados['categoria'],
        ':preco'          => $precoDecimal,
        ':localizacao'    => $dados['localizacao'],
        ':imagem_url'     => $dados['imagem'],
        ':quartos'        => intval($dados['quartos']),
        ':banheiros'      => intval($dados['banheiros']),
        ':salas'          => intval($dados['salas']),
        ':cozinhas'       => intval($dados['cozinhas']),
        ':garagem'        => intval($dados['garagem']),
        ':area_total'     => intval(preg_replace('/[^0-9]/', '', $dados['areaTotal'])),
        ':area_construida'=> intval(preg_replace('/[^0-9]/', '', $dados['areaConstruida'])),
        ':outros_comodos' => $dados['outrosComodos']
    ]);

    echo json_encode(["sucesso" => true, "mensagem" => "Imóvel guardado com sucesso permanentemente!"]);

} catch (PDOException $e) {
    echo json_encode(["sucesso" => false, "mensagem" => "Erro no banco de dados: " . $e->getMessage()]);
}
?>
