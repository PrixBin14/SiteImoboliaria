-- Script DDL para criar tabela imoveis
-- Use com cautela e ajuste o CHARSET/ENGINE conforme seu ambiente

CREATE TABLE IF NOT EXISTS `imoveis` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `codigo` VARCHAR(32) DEFAULT NULL,
  `titulo` VARCHAR(255) NOT NULL,
  `finalidade` VARCHAR(32) DEFAULT NULL,
  `categoria` VARCHAR(64) DEFAULT NULL,
  `preco` DECIMAL(14,2) DEFAULT NULL,
  `localizacao` VARCHAR(255) DEFAULT NULL,
  `imagem_url` VARCHAR(512) DEFAULT NULL,
  `quartos` TINYINT UNSIGNED DEFAULT 0,
  `banheiros` TINYINT UNSIGNED DEFAULT 0,
  `salas` TINYINT UNSIGNED DEFAULT 0,
  `cozinhas` TINYINT UNSIGNED DEFAULT 0,
  `garagem` TINYINT UNSIGNED DEFAULT 0,
  `area_total` DECIMAL(10,2) DEFAULT NULL,
  `area_construida` DECIMAL(10,2) DEFAULT NULL,
  `outros_comodos` TEXT DEFAULT NULL,
  `data_cadastro` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX (`codigo`),
  INDEX (`finalidade`),
  INDEX (`categoria`),
  INDEX (`preco`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
