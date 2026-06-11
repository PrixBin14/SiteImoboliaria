<?php
header("Content-Type: application/json");
require_once "conexao.php";

$status    = $_GET['status'] ?? 'todos';
$category  = $_GET['categoria'] ?? 'todos';
$city      = $_GET['local'] ?? '';
$bedrooms  = $_GET['quartos'] ?? 'todos';
$bathrooms = $_GET['banheiros'] ?? 'todos';
$garages   = $_GET['garagem'] ?? 'todos';
$priceMin  = floatval($_GET['preco_min'] ?? 0);
$priceMax  = floatval($_GET['preco_max'] ?? 999999999);
$areaMin   = floatval($_GET['area_min'] ?? 0);
$areaMax   = floatval($_GET['area_max'] ?? 999999999);

$sql = "SELECT * FROM imoveis WHERE 1=1";
$params = [];

if ($status !== 'todos') {
    $sql .= " AND finalidade = :finalidade";
    $params[':finalidade'] = $status;
}

if ($category !== 'todos') {
    $sql .= " AND categoria = :categoria";
    $params[':categoria'] = $category;
}

if (!empty($city)) {
    $sql .= " AND localizacao LIKE :localizacao";
    $params[':localizacao'] = "%" . $city . "%";
}

if ($bedrooms !== 'todos') {
    $sql .= " AND quartos >= :quartos";
    $params[':quartos'] = intval($bedrooms);
}

if ($bathrooms !== 'todos') {
    $sql .= " AND banheiros >= :banheiros";
    $params[':banheiros'] = intval($bathrooms);
}

if ($garages !== 'todos') {
    $sql .= " AND garagem >= :garagem";
    $params[':garagem'] = intval($garages);
}

if ($priceMin > 0) {
    $sql .= " AND preco >= :preco_min";
    $params[':preco_min'] = $priceMin;
}
if ($priceMax > 0 && $priceMax < 999999999) {
    $sql .= " AND preco <= :preco_max";
    $params[':preco_max'] = $priceMax;
}

if ($areaMin > 0) {
    $sql .= " AND area_total >= :area_min";
    $params[':area_min'] = $areaMin;
}
if ($areaMax > 0 && $areaMax < 999999999) {
    $sql .= " AND area_total <= :area_max";
    $params[':area_max'] = $areaMax;
}

$sql .= " ORDER BY data_cadastro DESC";

try {
    $stmt = $pdo->prepare($sql);
    $stmt->execute($params);
    $resultados = $stmt->fetchAll(PDO::FETCH_ASSOC);

    foreach ($resultados as &$imovel) {
        $imovel['preco'] = number_format($imovel['preco'], 2, ',', '.');
        $imovel['areaTotal'] = $imovel['area_total'] > 0 ? $imovel['area_total'] . " m²" : "N/A";
        $imovel['areaConstruida'] = $imovel['area_construida'] > 0 ? $imovel['area_construida'] . " m²" : "N/A";
        $imovel['imagem'] = $imovel['imagem_url'];
        $imovel['outrosComodos'] = $imovel['outros_comodos'];
    }

    echo json_encode($resultados);

} catch (PDOException $e) {
    echo json_encode(["erro" => $e->getMessage()]);
}
?>
