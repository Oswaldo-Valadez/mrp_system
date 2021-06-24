-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 22, 2021 at 08:00 PM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mrp_system`
--
CREATE DATABASE IF NOT EXISTS `mrp_system` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `mrp_system`;

-- --------------------------------------------------------

--
-- Table structure for table `marcas`
--

DROP TABLE IF EXISTS `marcas`;
CREATE TABLE `marcas` (
  `id_marca` int(11) NOT NULL,
  `descripcion` varchar(30) NOT NULL
  -- `name` varchar(100) NOT NULL,
  -- `pin_up` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
CREATE TABLE `categorias` (
  `id_category` int(11) NOT NULL,
  -- `name` varchar(100) NOT NULL,
  `description` text NOT NULL
-- `pin_up` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `componentes`
--

DROP TABLE IF EXISTS `componentes`;
CREATE TABLE `componentes` (
  `id_componente` int(11) NOT NULL,
  `id_categoria` int(11) NOT NULL,
  `id_unidad` int(11) NOT NULL,
  `id_marca` int(11) NOT NULL,
  `descripcion` text NOT NULL,
  `dias de entrega` SMALLINT,
  `existencias` int NOT NULL,
  `stock_minimo` int NOT NULL
  -- `name` varchar(100) NOT NULL,
  -- `description` text NOT NULL,
  -- `stock` int(11) NOT NULL,
  -- `id_brand` int(11) NOT NULL,
  -- `id_measurement_unit` int(11) NOT NULL,
  -- `id_category` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `unidades de medida`
--

DROP TABLE IF EXISTS `unidades`;
CREATE TABLE `unidades` (
  `id_unidad` int(11) NOT NULL,
  `unidad` varchar(50) NOT NULL
  -- `code` varchar(5) NOT NULL,
  -- `pin_up` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `mps`
--

DROP TABLE IF EXISTS `mps`;
--CREATE TABLE `mps` (
--  `id_component` int(11) NOT NULL
--) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `mps_periods`
--

-- DROP TABLE IF EXISTS `mps_periods`;
-- CREATE TABLE `mps_periods` (
--   `id_mps_period` int(11) NOT NULL,
--   `gross_requirement` int(11) NOT NULL,
--   `scheduled_receptions` int(11) NOT NULL,
--   `availability_projection` int(11) NOT NULL,
--   `net_requirements` int(11) NOT NULL,
--   `planned_order_release` int(11) NOT NULL
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `ordenes`
--

DROP TABLE IF EXISTS `ordenes`;
CREATE TABLE `ordenes` (
  `id_orden` int(11) NOT NULL,
  `cliente` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

-- --------------------------------------------------------

--
-- Table structure for table `ordenes_partida`
--

DROP TABLE IF EXISTS `ordenes_partida`;
CREATE TABLE `ordenes_partida` (
  `id_orden` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `fecha de entrega` date,
  `estatus` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
CREATE TABLE `productos` (
  `id_producto` int(11) NOT NULL,
  `description` text NOT NULL,
  `id_hoja` int(11) NOT NULL,
  `existencias` int(11) NOT NULL,
  `dias_en_elaboracion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `hoja_calculo`
--

DROP TABLE IF EXISTS `hoja_calculo`;
CREATE TABLE `hoja_calculo` (
  `id_hoja` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `id_componente` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

-- --------------------------------------------------------

--
-- Table structure for table `plan maestro`
--

DROP TABLE IF EXISTS `plan_maestro`;
CREATE TABLE `plan_maestro` (
  `id_mes` int(11) NOT NULL,
  `id_componente` int(11) NOT NULL,
  `inventario_ini` int(11) NOT NULL,
  `unidad_prono` int(11) NOT NULL,
  `ped_client` int(11) NOT NULL,
  `inventario_final` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
-- CREATE TABLE `users` (
--   `id_user` int(11) NOT NULL,
--   `username` varchar(20) NOT NULL,
--   `fullname` varchar(100) NOT NULL,
--   `password` varchar(255) NOT NULL
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `marca`
--
ALTER TABLE `marca`
  ADD PRIMARY KEY (`id_marca`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id_categoria`);

--
-- Indexes for table `components`
--
ALTER TABLE `components`
  ADD PRIMARY KEY (`id_componente`),
  ADD KEY `id_marca` (`id_marca`),
  ADD KEY `id_unidad` (`id_unidad`),
  ADD KEY `id_categoria` (`id_categoria`);

--
-- Indexes for table `measurement_units`
--
ALTER TABLE `unidades`
  ADD PRIMARY KEY (`id_unidad`);

--
-- Indexes for table `mps_periods`
--
--ALTER TABLE `mps_periods`
--  ADD PRIMARY KEY (`id_mps_period`);

--
-- Indexes for table `orders`
--
ALTER TABLE `ordenes`
  ADD PRIMARY KEY (`id_orden`);

--
-- Indexes for table `products`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id_producto`);

--
-- Indexes for table `spreadsheet`
--
ALTER TABLE `hoja_calculo`
  ADD PRIMARY KEY (`id_hoja`),
  ADD KEY `id_componente` (`id_componente`),
  ADD KEY `id_producto` (`id_producto`);

-- Indexes for table `ordenes_partida`
--
ALTER TABLE `ordenes_partida`
  ADD PRIMARY KEY (`id_orden, id_producto`);

-- Indexes for table `plan maestro`
--
ALTER TABLE `plan_maestro`
  ADD PRIMARY KEY (`id_mes, id_componente`);
--
-- Indexes for table `users`
--
--ALTER TABLE `users`
--  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT for dumped tables
--
--
-- AUTO_INCREMENT for table `hoja calculo`
--
ALTER TABLE `hoja_calculo`
  MODIFY `id_hoja` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `brands`
--
ALTER TABLE `marcas`
  MODIFY `id_marca` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categorias`
  MODIFY `id_categoria` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `components`
--
ALTER TABLE `componente`
  MODIFY `id_componente` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `measurement_units`
--
ALTER TABLE `unidades`
  MODIFY `id_unidad` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `mps_periods`
--
--ALTER TABLE `mps_periods`
--  MODIFY `id_mps_period` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `ordenes`
  MODIFY `id_orden` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `productos`
  MODIFY `id_producto` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
--ALTER TABLE `users`
--  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `components`
--
ALTER TABLE `componentes`
  ADD CONSTRAINT `components_ibfk_1` FOREIGN KEY (`id_marca`) REFERENCES `marcas` (`id_marca`),
  ADD CONSTRAINT `components_ibfk_2` FOREIGN KEY (`id_unidad`) REFERENCES `unidades` (`id_unidad`),
  ADD CONSTRAINT `components_ibfk_3` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id_categoria`);

--
-- Constraints for table `spreadsheet`
--
ALTER TABLE `hoja_calculo`
  ADD CONSTRAINT `spreadsheet_ibfk_1` FOREIGN KEY (`id_componente`) REFERENCES `componentes` (`id_componente`),
  ADD CONSTRAINT `spreadsheet_ibfk_2` FOREIGN KEY (`id_product`) REFERENCES `products` (`id_product`);
COMMIT;

-- Constraints for table `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`id_hoja`) REFERENCES `hoja_calculo` (`id_hoja`);
COMMIT;

-- Constraints for table `ordenes partida`
--
ALTER TABLE `ordenes_partida`
  ADD CONSTRAINT `ordenes_partida_ibfk_1` FOREIGN KEY (`id_orden`) REFERENCES `ordenes` (`id_orden`),
  ADD CONSTRAINT `ordenes_partida_ibfk_2` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id_producto`);
COMMIT;

-- Constraints for table `plan maestro`
--
ALTER TABLE `plan_maestro`
  ADD CONSTRAINT `plan_maestro_ibfk_1` FOREIGN KEY (`id_componente`) REFERENCES `componentes` (`id_componente`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
