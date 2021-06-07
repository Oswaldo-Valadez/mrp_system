-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-06-2021 a las 17:25:57
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mrp_system`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `brands`
--

CREATE TABLE `brands` (
  `id_brand` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `brands`
--

INSERT INTO `brands` (`id_brand`, `name`) VALUES
(1, 'enim'),
(2, 'optio'),
(3, 'repellat'),
(4, 'ipsa'),
(5, 'fuga'),
(6, 'magni'),
(7, 'omnis'),
(8, 'inventore'),
(9, 'eveniet'),
(11, 'culpa'),
(12, 'est'),
(13, 'recusandae'),
(14, 'blanditiis'),
(15, 'laboriosam'),
(16, 'natus'),
(17, 'illum'),
(18, 'maxime'),
(19, 'sint'),
(20, 'tempore'),
(21, 'quo'),
(22, 'mollitia'),
(23, 'minima'),
(24, 'est'),
(25, 'dolor'),
(26, 'possimus'),
(27, 'qui'),
(28, 'error'),
(29, 'ut'),
(30, 'provident');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id_category` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id_category`, `name`, `description`) VALUES
(1, 'corrupti', 'Magnam alias minima error totam possimus consectetur quo.'),
(2, 'modi', 'Voluptates non est similique perspiciatis ab.'),
(3, 'voluptates', 'Qui nostrum omnis expedita iusto non animi id voluptatem illum.'),
(4, 'unde', 'Sunt consequuntur pariatur rerum eos quidem.'),
(5, 'non', 'Quo eos provident molestias totam qui sint suscipit ut.'),
(6, 'amet', 'Eaque sapiente rem qui molestiae blanditiis.'),
(7, 'veritatis', 'Perspiciatis voluptatem adipisci qui possimus dicta ipsum atque.'),
(8, 'accusantium', 'Voluptates commodi maxime sed quisquam itaque maxime eum aut aut.'),
(9, 'facilis', 'Aut sunt consequuntur laborum dignissimos ut ut sapiente esse.'),
(10, 'nulla', 'Mollitia quidem sapiente quia ducimus et iste non.'),
(11, 'temporibus', 'Nobis nemo sed molestiae et esse consequatur id veniam aliquid.'),
(12, 'unde', 'Est eligendi voluptatum velit autem voluptatem maxime voluptate.'),
(13, 'eum', 'Et ipsam id aperiam eveniet.'),
(14, 'qui', 'Tempora quam repudiandae debitis.'),
(15, 'nisi', 'Non id doloremque et.'),
(16, 'voluptatem', 'Repellat ut quasi quia qui ipsa deleniti.'),
(17, 'aut', 'Doloremque totam sint.'),
(18, 'sequi', 'Magni dolor impedit aut magnam et ut sunt explicabo natus.'),
(19, 'ad', 'Deleniti sit optio in a sed autem ut sint.'),
(20, 'doloremque', 'Doloremque saepe odit quia et est in illo voluptas quis.'),
(21, 'tenetur', 'Id et ut incidunt.'),
(22, 'error', 'Alias ea et ad.'),
(23, 'consectetur', 'Quasi doloremque ipsum alias.'),
(24, 'sed', 'Non omnis magnam dolore veritatis modi molestiae id est tempora.'),
(25, 'repudiandae', 'Eos eos in.'),
(26, 'occaecati', 'Eum nulla vero praesentium perferendis accusantium.'),
(27, 'voluptatem', 'Ducimus consequuntur neque qui aut.'),
(28, 'qui', 'Aut animi perferendis fuga numquam totam molestias vel.'),
(29, 'quia', 'Maxime deserunt totam harum.'),
(30, 'dicta', 'Non eum nobis amet.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materials`
--

CREATE TABLE `materials` (
  `id_material` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `stock` int(11) NOT NULL,
  `id_brand` int(11) NOT NULL,
  `id_measurement_unit` int(11) NOT NULL,
  `id_subcategory` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materials_services`
--

CREATE TABLE `materials_services` (
  `id_material` int(11) NOT NULL,
  `id_service` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `measurement_units`
--

CREATE TABLE `measurement_units` (
  `id_measurement_unit` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `code` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `measurement_units`
--

INSERT INTO `measurement_units` (`id_measurement_unit`, `name`, `code`) VALUES
(1, 'corporis', 'n'),
(2, 'et', 'n'),
(3, 'in', 'g'),
(4, 'velit', 'h'),
(5, 'asperiores', 'b'),
(6, 'esse', 'v'),
(7, 'vel', 'l'),
(8, 'temporibus', 'm'),
(9, 'animi', 'h'),
(10, 'cupiditate', 'f');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mrp`
--

CREATE TABLE `mrp` (
  `id_mrp` int(11) NOT NULL,
  `id_material` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mrp_months`
--

CREATE TABLE `mrp_months` (
  `id_mrp_month` int(11) NOT NULL,
  `gross_requirement` int(11) NOT NULL,
  `scheduled_receptions` int(11) NOT NULL,
  `availability_projection` int(11) NOT NULL,
  `net_requirements` int(11) NOT NULL,
  `planned_order_release` int(11) NOT NULL,
  `id_mrp` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orders`
--

CREATE TABLE `orders` (
  `id_order` int(11) NOT NULL,
  `order_reference` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `services`
--

CREATE TABLE `services` (
  `id_service` int(11) NOT NULL,
  `name` int(11) NOT NULL,
  `description` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `sessions`
--

INSERT INTO `sessions` (`session_id`, `expires`, `data`) VALUES
('3AvN01UkF65Kz7q38_THQe_sQmDCN2Fw', 1623117809, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{},\"passport\":{\"user\":1}}'),
('bzvBbyl7d0PilRYogzaEVl0XILn0ETqJ', 1623093196, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{},\"passport\":{\"user\":1}}'),
('c12qSMUej2Ny-dfdapebpwsH5S3s1Db7', 1623114751, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{},\"passport\":{\"user\":1}}'),
('ik9drmss-EW04Y13abYNxlDjNNVSBA46', 1623126998, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{},\"passport\":{\"user\":1}}');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `subcategories`
--

CREATE TABLE `subcategories` (
  `id_subcategory` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `id_category` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `subcategories`
--

INSERT INTO `subcategories` (`id_subcategory`, `name`, `description`, `id_category`) VALUES
(2, 'blanditiis', 'Sed omnis ipsum est est alias.', 11),
(3, 'sit', 'Molestiae non ut rerum.', 23),
(4, 'aut', 'Sit exercitationem est.', 17),
(5, 'vero', 'Dolorem rerum vero.', 5),
(6, 'ut', 'Cum asperiores ratione ab facere rem non quasi eaque.', 5),
(7, 'id', 'Sapiente saepe molestiae odio.', 20),
(8, 'quasi', 'Doloribus perspiciatis voluptatem earum unde repudiandae quia quasi voluptatum.', 20),
(9, 'aut', 'Ipsa autem nobis dolor qui quidem.', 7),
(10, 'nihil', 'Nihil sed debitis labore exercitationem temporibus fuga.', 1),
(11, 'ut', 'Minus iusto molestias impedit quidem sint.', 10),
(12, 'labore', 'Possimus explicabo voluptatem officiis praesentium cum voluptatem.', 4),
(13, 'quidem', 'Reiciendis rerum odit ipsa perspiciatis praesentium sed quam.', 15),
(14, 'quia', 'Tempore qui modi.', 10),
(15, 'officiis', 'Sunt nostrum recusandae repellat dolorum ipsa.', 5),
(16, 'laboriosam', 'Vitae ad id ullam sit cumque maxime accusamus ut.', 17),
(17, 'consequatur', 'Nam dolorem optio blanditiis ipsam dolor quam nesciunt eum molestiae.', 23),
(18, 'nulla', 'Totam in rerum cumque voluptatibus omnis qui voluptatibus.', 25),
(19, 'sed', 'Minima rerum maiores tempora optio at dolorum ad.', 3),
(20, 'eos', 'Doloremque aut accusamus voluptatem consequatur consequatur quis voluptate porro.', 28),
(21, 'et', 'Quibusdam aut deleniti neque saepe saepe quaerat.', 22),
(22, 'ipsa', 'Quo hic cupiditate sunt numquam doloremque error veniam.', 24),
(23, 'rerum', 'Quasi ut accusamus.', 10),
(24, 'nihil', 'Nemo aut vel.', 5),
(25, 'pariatur', 'Rerum et nam velit sequi praesentium qui deserunt quo accusamus.', 27),
(26, 'cupiditate', 'Sed accusantium harum nobis.', 28),
(27, 'harum', 'Placeat rerum aut delectus voluptatibus natus nam.', 15),
(28, 'quas', 'Dolore officia illo ea.', 17),
(29, 'architecto', 'Molestias alias consectetur eum itaque perspiciatis pariatur.', 28),
(30, 'totam', 'Sequi consectetur quia.', 17),
(31, 'pariatur', 'Possimus quae vitae fugiat dicta porro nulla modi.', 19),
(32, 'doloremque', 'Rerum dicta possimus dolor est omnis est accusamus deleniti.', 15),
(33, 'esse', 'Odio iure a est.', 16),
(34, 'quae', 'Repudiandae cumque non modi totam fuga reiciendis.', 11),
(35, 'sed', 'Iste quia nemo ut et qui non.', 22),
(36, 'deleniti', 'Adipisci aliquid nemo voluptas voluptas temporibus cum eum.', 10),
(37, 'dolor', 'Iste tempora illo quia saepe ea in labore ipsum.', 1),
(38, 'nesciunt', 'Est et voluptatem hic porro.', 12),
(39, 'et', 'Cum saepe omnis pariatur adipisci accusamus minus rerum.', 6),
(40, 'excepturi', 'Dolores soluta perspiciatis eos iure et.', 11),
(41, 'eum', 'Sequi numquam esse autem praesentium veritatis dolores temporibus ut est.', 20),
(42, 'natus', 'Dolores quasi maiores totam veniam.', 19),
(43, 'dolores', 'Molestias est corrupti dolor quo libero quia.', 7),
(44, 'reprehenderit', 'Aspernatur modi autem quis voluptatem reiciendis qui perspiciatis odio.', 5),
(45, 'minus', 'Qui est suscipit.', 8),
(46, 'deleniti', 'Repellendus optio sed pariatur ex iure praesentium quibusdam molestiae illo.', 18),
(47, 'vel', 'Et qui quos eveniet rerum libero.', 26),
(48, 'iure', 'Quasi corporis veritatis amet reiciendis et cum voluptas.', 20),
(49, 'quia', 'Rerum quis et molestiae alias dolore aut iure dolorem temporibus.', 1),
(50, 'dolorum', 'Rerum eum et nihil deleniti neque laudantium nisi deserunt.', 29),
(51, 'ipsam', 'Libero consequatur molestiae molestiae quis eum molestiae perspiciatis dolor.', 3),
(52, 'laudantium', 'Quibusdam cupiditate alias maxime aut ad velit commodi aliquid.', 15),
(53, 'doloremque', 'Sit suscipit quia quidem atque commodi sed.', 24),
(54, 'vitae', 'Voluptatem et cum.', 4),
(55, 'earum', 'Consectetur aut praesentium.', 19),
(56, 'delectus', 'Sed adipisci fugiat est.', 10),
(58, 'est', 'Omnis cumque quis qui nobis quas magni.', 12),
(59, 'est', 'Fugiat quia ut eum qui iure.', 20),
(60, 'animi', 'Reiciendis error commodi aut natus quisquam.', 26),
(61, 'maxime', 'Rerum saepe accusamus impedit et est consequatur qui cum asperiores.', 25),
(62, 'in', 'Accusantium perspiciatis aut ut illo aut ullam ut eveniet aperiam.', 9),
(63, 'explicabo', 'Velit eos quis dolores magnam cupiditate suscipit voluptatibus pariatur inventore.', 22),
(64, 'numquam', 'Excepturi vitae accusamus iste cumque dolore sint necessitatibus.', 20),
(65, 'est', 'Provident perspiciatis error harum.', 3),
(66, 'maiores', 'Quia reprehenderit ut velit qui et rem molestiae.', 9),
(67, 'consequuntur', 'Vitae a voluptatibus.', 28),
(68, 'quo', 'Autem et accusamus eum deleniti.', 5),
(69, 'autem', 'Aut repudiandae est quo.', 14),
(70, 'repudiandae', 'Est dolorum eos rem quia autem voluptatem ipsam.', 13),
(71, 'quibusdam', 'Eos tenetur suscipit quos id aspernatur quae impedit quas velit.', 3),
(72, 'in', 'Quae nisi enim quis corrupti corrupti neque provident autem quam.', 3),
(73, 'omnis', 'Nulla suscipit vel.', 22),
(74, 'quia', 'Molestiae quis molestias numquam.', 17),
(75, 'qui', 'Quo qui doloremque harum accusantium et.', 26),
(76, 'eum', 'Maxime quia sapiente totam alias ipsa sint sunt.', 4),
(77, 'quae', 'Vel fuga qui provident impedit voluptates excepturi.', 12),
(78, 'autem', 'Maxime quis vitae aut et dolor qui ex ab.', 12),
(79, 'necessitatibus', 'Alias fugit explicabo rerum officia.', 10),
(80, 'molestiae', 'Magnam sed eos laboriosam.', 2),
(81, 'dolor', 'Delectus mollitia minima nemo non non.', 20),
(82, 'dolor', 'Quia tempore accusamus.', 19),
(83, 'voluptatem', 'Earum minima placeat sequi molestiae et veritatis expedita earum cupiditate.', 13),
(84, 'sit', 'Aut maiores qui magni eos autem repudiandae.', 23),
(85, 'et', 'Accusamus at voluptatem sit qui non corrupti sunt.', 20),
(86, 'et', 'Eum accusamus rem et.', 25),
(87, 'aut', 'Distinctio ipsam non sit nulla ut.', 2),
(88, 'aut', 'Voluptas doloribus amet quisquam molestiae aut est.', 14),
(89, 'alias', 'Expedita nihil animi.', 7),
(90, 'perferendis', 'Nulla laboriosam aut repellendus ipsum.', 21),
(91, 'explicabo', 'Dolore aut pariatur.', 21);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id_user` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  `fullname` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id_user`, `username`, `fullname`, `password`) VALUES
(1, 'Admin', 'Oswaldo Dasaet Valadez Láriz', '$2a$10$A2vidM7fdPz9pm92gWJZzOwX2yIaJofkxWaqYGavsVAvxA4LpEoZ6');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id_brand`);

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id_category`);

--
-- Indices de la tabla `materials`
--
ALTER TABLE `materials`
  ADD PRIMARY KEY (`id_material`),
  ADD KEY `id_subcategory` (`id_subcategory`),
  ADD KEY `id_brand` (`id_brand`),
  ADD KEY `id_measurement_unit` (`id_measurement_unit`);

--
-- Indices de la tabla `measurement_units`
--
ALTER TABLE `measurement_units`
  ADD PRIMARY KEY (`id_measurement_unit`);

--
-- Indices de la tabla `mrp`
--
ALTER TABLE `mrp`
  ADD PRIMARY KEY (`id_mrp`),
  ADD KEY `id_material` (`id_material`);

--
-- Indices de la tabla `mrp_months`
--
ALTER TABLE `mrp_months`
  ADD KEY `id_mrp` (`id_mrp`);

--
-- Indices de la tabla `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id_order`);

--
-- Indices de la tabla `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- Indices de la tabla `subcategories`
--
ALTER TABLE `subcategories`
  ADD PRIMARY KEY (`id_subcategory`),
  ADD KEY `id_category` (`id_category`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `brands`
--
ALTER TABLE `brands`
  MODIFY `id_brand` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id_category` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT de la tabla `materials`
--
ALTER TABLE `materials`
  MODIFY `id_material` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `measurement_units`
--
ALTER TABLE `measurement_units`
  MODIFY `id_measurement_unit` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `mrp`
--
ALTER TABLE `mrp`
  MODIFY `id_mrp` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `orders`
--
ALTER TABLE `orders`
  MODIFY `id_order` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `subcategories`
--
ALTER TABLE `subcategories`
  MODIFY `id_subcategory` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=92;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `materials`
--
ALTER TABLE `materials`
  ADD CONSTRAINT `materials_ibfk_1` FOREIGN KEY (`id_subcategory`) REFERENCES `subcategories` (`id_subcategory`),
  ADD CONSTRAINT `materials_ibfk_2` FOREIGN KEY (`id_brand`) REFERENCES `brands` (`id_brand`),
  ADD CONSTRAINT `materials_ibfk_3` FOREIGN KEY (`id_measurement_unit`) REFERENCES `measurement_units` (`id_measurement_unit`);

--
-- Filtros para la tabla `mrp_months`
--
ALTER TABLE `mrp_months`
  ADD CONSTRAINT `mrp_months_ibfk_1` FOREIGN KEY (`id_mrp`) REFERENCES `mrp` (`id_mrp`);

--
-- Filtros para la tabla `subcategories`
--
ALTER TABLE `subcategories`
  ADD CONSTRAINT `subcategories_ibfk_1` FOREIGN KEY (`id_category`) REFERENCES `categories` (`id_category`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
