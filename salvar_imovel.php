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
                codigo, titulo, finalidade, categoria, preco, localizacao, imagem_url, 
                quartos, banheiros, salas, cozinhas, garagem, area_total, area_construida, outros_comodos
            ) VALUES (
                :codigo, :titulo, :finalidade, :categoria, :preco, :localizacao, :imagem_url, 
                :quartos, :banheiros, :salas, :cozinhas, :garagem, :area_total, :area_construida, :outros_comodos
            )";

    $stmt = $pdo->prepare($sql);

    $areaTotalRaw = isset($dados['areaTotal']) ? $dados['areaTotal'] : null;
    $areaConstruidaRaw = isset($dados['areaConstruida']) ? $dados['areaConstruida'] : null;

    $areaTotalNum = null;
    if ($areaTotalRaw !== null && $areaTotalRaw !== '') {
        $areaTotalNum = floatval(preg_replace('/[^0-9\.]/', '', $areaTotalRaw));
    }

    $areaConstruidaNum = null;
    if ($areaConstruidaRaw !== null && $areaConstruidaRaw !== '') {
        $areaConstruidaNum = floatval(preg_replace('/[^0-9\.]/', '', $areaConstruidaRaw));
    }

    $codigo = isset($dados['codigo']) && trim($dados['codigo']) !== '' ? $dados['codigo'] : ('REF-' . rand(1000, 9999));

    $stmt->execute([
        ':codigo'         => $codigo,
        ':titulo'         => isset($dados['titulo']) ? $dados['titulo'] : null,
        ':finalidade'     => isset($dados['finalidade']) ? $dados['finalidade'] : null,
        ':categoria'      => isset($dados['categoria']) ? $dados['categoria'] : null,
        ':preco'          => $precoDecimal,
        ':localizacao'    => isset($dados['localizacao']) ? $dados['localizacao'] : null,
        ':imagem_url'     => isset($dados['imagem']) ? $dados['imagem'] : null,
        ':quartos'        => isset($dados['quartos']) ? intval($dados['quartos']) : 0,
        ':banheiros'      => isset($dados['banheiros']) ? intval($dados['banheiros']) : 0,
        ':salas'          => isset($dados['salas']) ? intval($dados['salas']) : 0,
        ':cozinhas'       => isset($dados['cozinhas']) ? intval($dados['cozinhas']) : 0,
        ':garagem'        => isset($dados['garagem']) ? intval($dados['garagem']) : 0,
        ':area_total'     => $areaTotalNum,
        ':area_construida'=> $areaConstruidaNum,
        ':outros_comodos' => isset($dados['outrosComodos']) ? $dados['outrosComodos'] : null
    ]);

    echo json_encode(["sucesso" => true, "mensagem" => "Imóvel guardado com sucesso permanentemente!"]);

} catch (PDOException $e) {
    echo json_encode(["sucesso" => false, "mensagem" => "Erro no banco de dados: " . $e->getMessage()]);
}
?>
