use hackathon;

CREATE TABLE `tb_contatos` (
  `id_user` varchar(100) DEFAULT NULL,
  `numero` varchar(100) DEFAULT NULL,
  `nome_contato` varchar(100) DEFAULT NULL,
  `Mensagem` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `tb_user` (
  `ID_USER` varchar(100) DEFAULT NULL,
  `NOME_FANTASIA` varchar(100) DEFAULT NULL,
  `IDADE` varchar(100) DEFAULT NULL,
  `E_MAIL` varchar(100) DEFAULT NULL,
  `NUMERO` varchar(100) DEFAULT NULL,
  `Senha` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;