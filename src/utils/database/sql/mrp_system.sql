-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 13, 2021 at 08:01 PM
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
-- Table structure for table `brands`
--

DROP TABLE IF EXISTS `brands`;
CREATE TABLE `brands` (
  `id_brand` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `pin_up` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
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
-- Table structure for table `components`
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
-- Table structure for table `measurement_units`
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
-- Table structure for table `mps`
--

DROP TABLE IF EXISTS `mps`;
CREATE TABLE `mps` (
  `id_mps` int(11) NOT NULL,
  `initial_stock` int(11) NOT NULL,
  `year` year(4) NOT NULL,
  `id_component` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `mps_periods`
--

DROP TABLE IF EXISTS `mps_periods`;
CREATE TABLE `mps_periods` (
  `id_mps_period` int(11) NOT NULL,
  `gross_requirement` int(11) NOT NULL,
  `scheduled_receptions` int(11) NOT NULL,
  `availability_projection` int(11) NOT NULL,
  `net_requirements` int(11) NOT NULL,
  `planned_order_release` int(11) NOT NULL,
  `id_last_mps_period` int(11) DEFAULT NULL,
  `id_mps` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `id_product` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `production_time` int(11) NOT NULL,
  `installed_capacity` int(11) NOT NULL,
  `stock` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `purchases`
--

DROP TABLE IF EXISTS `purchases`;
CREATE TABLE `purchases` (
  `id_purchase` int(11) NOT NULL,
  `reference_code` varchar(20) NOT NULL,
  `creation_date` date NOT NULL,
  `details` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `purchases_components`
--

DROP TABLE IF EXISTS `purchases_components`;
CREATE TABLE `purchases_components` (
  `id_component` int(11) NOT NULL,
  `id_purchase` int(11) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `sales`
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
-- Table structure for table `sales_products`
--

DROP TABLE IF EXISTS `sales_products`;
CREATE TABLE `sales_products` (
  `id_sale` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `spreadsheet`
--

DROP TABLE IF EXISTS `spreadsheet`;
CREATE TABLE `spreadsheet` (
  `id_component` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id_user` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  `fullname` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id_brand`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id_category`);

--
-- Indexes for table `components`
--
ALTER TABLE `components`
  ADD PRIMARY KEY (`id_component`),
  ADD KEY `id_brand` (`id_brand`),
  ADD KEY `id_measurement_unit` (`id_measurement_unit`),
  ADD KEY `id_category` (`id_category`);

--
-- Indexes for table `measurement_units`
--
ALTER TABLE `measurement_units`
  ADD PRIMARY KEY (`id_measurement_unit`);

--
-- Indexes for table `mps`
--
ALTER TABLE `mps`
  ADD PRIMARY KEY (`id_mps`),
  ADD UNIQUE KEY `year_component` (`year`,`id_component`) USING BTREE,
  ADD KEY `id_component` (`id_component`);

--
-- Indexes for table `mps_periods`
--
ALTER TABLE `mps_periods`
  ADD PRIMARY KEY (`id_mps_period`),
  ADD KEY `id_last_mps` (`id_last_mps_period`),
  ADD KEY `id_mps` (`id_mps`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id_product`);

--
-- Indexes for table `purchases`
--
ALTER TABLE `purchases`
  ADD PRIMARY KEY (`id_purchase`);

--
-- Indexes for table `purchases_components`
--
ALTER TABLE `purchases_components`
  ADD KEY `id_component` (`id_component`),
  ADD KEY `id_purchase` (`id_purchase`);

--
-- Indexes for table `sales`
--
ALTER TABLE `sales`
  ADD PRIMARY KEY (`id_sale`);

--
-- Indexes for table `sales_products`
--
ALTER TABLE `sales_products`
  ADD KEY `id_sale` (`id_sale`),
  ADD KEY `id_product` (`id_product`);

--
-- Indexes for table `spreadsheet`
--
ALTER TABLE `spreadsheet`
  ADD KEY `id_component` (`id_component`),
  ADD KEY `id_product` (`id_product`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `brands`
--
ALTER TABLE `brands`
  MODIFY `id_brand` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id_category` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `components`
--
ALTER TABLE `components`
  MODIFY `id_component` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `measurement_units`
--
ALTER TABLE `measurement_units`
  MODIFY `id_measurement_unit` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `mps`
--
ALTER TABLE `mps`
  MODIFY `id_mps` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `mps_periods`
--
ALTER TABLE `mps_periods`
  MODIFY `id_mps_period` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id_product` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `purchases`
--
ALTER TABLE `purchases`
  MODIFY `id_purchase` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sales`
--
ALTER TABLE `sales`
  MODIFY `id_sale` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `components`
--
ALTER TABLE `components`
  ADD CONSTRAINT `components_ibfk_1` FOREIGN KEY (`id_brand`) REFERENCES `brands` (`id_brand`),
  ADD CONSTRAINT `components_ibfk_2` FOREIGN KEY (`id_measurement_unit`) REFERENCES `measurement_units` (`id_measurement_unit`),
  ADD CONSTRAINT `components_ibfk_3` FOREIGN KEY (`id_category`) REFERENCES `categories` (`id_category`);

--
-- Constraints for table `mps`
--
ALTER TABLE `mps`
  ADD CONSTRAINT `mps_ibfk_1` FOREIGN KEY (`id_component`) REFERENCES `components` (`id_component`);

--
-- Constraints for table `mps_periods`
--
ALTER TABLE `mps_periods`
  ADD CONSTRAINT `mps_periods_ibfk_1` FOREIGN KEY (`id_last_mps_period`) REFERENCES `mps_periods` (`id_mps_period`),
  ADD CONSTRAINT `mps_periods_ibfk_2` FOREIGN KEY (`id_mps`) REFERENCES `mps` (`id_mps`);

--
-- Constraints for table `purchases_components`
--
ALTER TABLE `purchases_components`
  ADD CONSTRAINT `purchases_components_ibfk_1` FOREIGN KEY (`id_purchase`) REFERENCES `purchases` (`id_purchase`),
  ADD CONSTRAINT `purchases_components_ibfk_2` FOREIGN KEY (`id_component`) REFERENCES `components` (`id_component`);

--
-- Constraints for table `sales_products`
--
ALTER TABLE `sales_products`
  ADD CONSTRAINT `sales_products_ibfk_1` FOREIGN KEY (`id_sale`) REFERENCES `sales` (`id_sale`),
  ADD CONSTRAINT `sales_products_ibfk_2` FOREIGN KEY (`id_product`) REFERENCES `products` (`id_product`);

--
-- Constraints for table `spreadsheet`
--
ALTER TABLE `spreadsheet`
  ADD CONSTRAINT `spreadsheet_ibfk_1` FOREIGN KEY (`id_component`) REFERENCES `components` (`id_component`),
  ADD CONSTRAINT `spreadsheet_ibfk_2` FOREIGN KEY (`id_product`) REFERENCES `products` (`id_product`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
