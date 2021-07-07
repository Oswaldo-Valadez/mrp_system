-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-07-2021 a las 02:56:08
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.2.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mrp_system`
--
CREATE DATABASE IF NOT EXISTS `mrp_system` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `mrp_system`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `brands`
--

DROP TABLE IF EXISTS `brands`;
CREATE TABLE `brands` (
  `id_brand` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `pin_up` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
  `id_category` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `pin_up` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `components`
--

DROP TABLE IF EXISTS `components`;
CREATE TABLE `components` (
  `id_component` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `stock` int(11) NOT NULL,
  `security_stock` int(11) NOT NULL,
  `wait_time` int(11) NOT NULL,
  `id_brand` int(11) NOT NULL,
  `id_measurement_unit` int(11) NOT NULL,
  `id_category` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `components_purchases`
--

DROP TABLE IF EXISTS `components_purchases`;
CREATE TABLE `components_purchases` (
  `id_component` int(11) NOT NULL,
  `id_purchase` int(11) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `measurement_units`
--

DROP TABLE IF EXISTS `measurement_units`;
CREATE TABLE `measurement_units` (
  `id_measurement_unit` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `code` varchar(5) NOT NULL,
  `pin_up` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mps`
--

DROP TABLE IF EXISTS `mps`;
CREATE TABLE `mps` (
  `id_mps` int(11) NOT NULL,
  `initial_inventory` int(11) NOT NULL,
  `id_component` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mps_periods`
--

DROP TABLE IF EXISTS `mps_periods`;
CREATE TABLE `mps_periods` (
  `id_mps_period` int(11) NOT NULL,
  `gross_requirement` int(11) NOT NULL,
  `scheduled_receptions` int(11) NOT NULL,
  `availability_projection` int(11) NOT NULL,
  `net_requirements` int(11) NOT NULL,
  `planned_order_release` int(11) NOT NULL,
  `id_last_mps_period` int(11) NOT NULL,
  `id_mps` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `id_product` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `production_time` int(11) NOT NULL,
  `stock` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `purchases`
--

DROP TABLE IF EXISTS `purchases`;
CREATE TABLE `purchases` (
  `id_purchase` int(11) NOT NULL,
  `reference_code` varchar(20) NOT NULL,
  `creation_date` datetime NOT NULL,
  `details` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sales`
--

DROP TABLE IF EXISTS `sales`;
CREATE TABLE `sales` (
  `id_sale` int(11) NOT NULL,
  `reference_code` varchar(20) NOT NULL,
  `creation_date` datetime NOT NULL,
  `details` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sales_products`
--

DROP TABLE IF EXISTS `sales_products`;
CREATE TABLE `sales_products` (
  `id_sale` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `spreadsheet`
--

DROP TABLE IF EXISTS `spreadsheet`;
CREATE TABLE `spreadsheet` (
  `id_component` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id_user` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  `fullname` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
-- Indices de la tabla `components`
--
ALTER TABLE `components`
  ADD PRIMARY KEY (`id_component`),
  ADD KEY `id_brand` (`id_brand`),
  ADD KEY `id_measurement_unit` (`id_measurement_unit`),
  ADD KEY `id_category` (`id_category`);

--
-- Indices de la tabla `components_purchases`
--
ALTER TABLE `components_purchases`
  ADD KEY `id_component` (`id_component`),
  ADD KEY `id_purchase` (`id_purchase`);

--
-- Indices de la tabla `measurement_units`
--
ALTER TABLE `measurement_units`
  ADD PRIMARY KEY (`id_measurement_unit`);

--
-- Indices de la tabla `mps`
--
ALTER TABLE `mps`
  ADD PRIMARY KEY (`id_mps`),
  ADD KEY `id_component` (`id_component`);

--
-- Indices de la tabla `mps_periods`
--
ALTER TABLE `mps_periods`
  ADD PRIMARY KEY (`id_mps_period`),
  ADD KEY `id_last_mps` (`id_last_mps_period`),
  ADD KEY `id_mps` (`id_mps`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id_product`);

--
-- Indices de la tabla `purchases`
--
ALTER TABLE `purchases`
  ADD PRIMARY KEY (`id_purchase`);

--
-- Indices de la tabla `sales`
--
ALTER TABLE `sales`
  ADD PRIMARY KEY (`id_sale`);

--
-- Indices de la tabla `sales_products`
--
ALTER TABLE `sales_products`
  ADD KEY `id_sale` (`id_sale`),
  ADD KEY `id_product` (`id_product`);

--
-- Indices de la tabla `spreadsheet`
--
ALTER TABLE `spreadsheet`
  ADD KEY `id_component` (`id_component`),
  ADD KEY `id_product` (`id_product`);

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
  MODIFY `id_brand` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id_category` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `components`
--
ALTER TABLE `components`
  MODIFY `id_component` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `measurement_units`
--
ALTER TABLE `measurement_units`
  MODIFY `id_measurement_unit` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `mps`
--
ALTER TABLE `mps`
  MODIFY `id_mps` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `mps_periods`
--
ALTER TABLE `mps_periods`
  MODIFY `id_mps_period` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id_product` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `purchases`
--
ALTER TABLE `purchases`
  MODIFY `id_purchase` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `sales`
--
ALTER TABLE `sales`
  MODIFY `id_sale` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `components`
--
ALTER TABLE `components`
  ADD CONSTRAINT `components_ibfk_1` FOREIGN KEY (`id_brand`) REFERENCES `brands` (`id_brand`),
  ADD CONSTRAINT `components_ibfk_2` FOREIGN KEY (`id_measurement_unit`) REFERENCES `measurement_units` (`id_measurement_unit`),
  ADD CONSTRAINT `components_ibfk_3` FOREIGN KEY (`id_category`) REFERENCES `categories` (`id_category`);

--
-- Filtros para la tabla `components_purchases`
--
ALTER TABLE `components_purchases`
  ADD CONSTRAINT `components_purchases_ibfk_1` FOREIGN KEY (`id_purchase`) REFERENCES `purchases` (`id_purchase`),
  ADD CONSTRAINT `components_purchases_ibfk_2` FOREIGN KEY (`id_component`) REFERENCES `components` (`id_component`);

--
-- Filtros para la tabla `mps`
--
ALTER TABLE `mps`
  ADD CONSTRAINT `mps_ibfk_1` FOREIGN KEY (`id_component`) REFERENCES `components` (`id_component`);

--
-- Filtros para la tabla `mps_periods`
--
ALTER TABLE `mps_periods`
  ADD CONSTRAINT `mps_periods_ibfk_1` FOREIGN KEY (`id_last_mps_period`) REFERENCES `mps_periods` (`id_mps_period`),
  ADD CONSTRAINT `mps_periods_ibfk_2` FOREIGN KEY (`id_mps`) REFERENCES `mps` (`id_mps`);

--
-- Filtros para la tabla `sales_products`
--
ALTER TABLE `sales_products`
  ADD CONSTRAINT `sales_products_ibfk_1` FOREIGN KEY (`id_sale`) REFERENCES `sales` (`id_sale`),
  ADD CONSTRAINT `sales_products_ibfk_2` FOREIGN KEY (`id_product`) REFERENCES `products` (`id_product`);

--
-- Filtros para la tabla `spreadsheet`
--
ALTER TABLE `spreadsheet`
  ADD CONSTRAINT `spreadsheet_ibfk_1` FOREIGN KEY (`id_component`) REFERENCES `components` (`id_component`),
  ADD CONSTRAINT `spreadsheet_ibfk_2` FOREIGN KEY (`id_product`) REFERENCES `products` (`id_product`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
