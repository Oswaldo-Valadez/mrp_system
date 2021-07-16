-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 16, 2021 at 07:36 PM
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

--
-- Dumping data for table `brands`
--

INSERT INTO `brands` (`id_brand`, `name`, `pin_up`) VALUES
(1, 'NVIDIA', 1),
(2, 'GIGABYTE', 1),
(3, 'AMD', 1),
(4, 'INTEL', 1),
(5, 'ASUS', 0),
(6, 'MSI', 0),
(7, 'COOLER MASTER', 0),
(8, 'ADATA', 0),
(9, 'CORSAIR', 0),
(10, 'KINGSTON', 0),
(11, 'LG', 0),
(12, 'THERMALTAKE', 0);

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id_category`, `name`, `description`, `pin_up`) VALUES
(1, 'Motherboards', 'Motherboards', 1),
(2, 'Processors', 'Processors', 1),
(3, 'RAM', 'RAM', 1),
(4, 'Storage', 'Storage SSD and HDD', 1),
(5, 'Cabinets', 'Cabinets', 1),
(6, 'Monitors', 'Monitors', 0),
(7, 'Keyboards', 'Keyboards', 0),
(8, 'Mouses', 'Mouses', 0),
(9, 'Speakers and headsets', 'Speakers and headsets', 0),
(10, 'OS', 'Operative system', 0),
(11, 'Power suppliers', 'Others: power suppliers', 1),
(12, 'Video cards', 'Others: video cards', 1),
(13, 'Regulators and nobreaks', 'Others: regulators and nobreaks', 0),
(14, 'Webcams', 'Others: webcams', 0),
(15, 'Cooling and heatsinks', 'Others: cooling and heatsinks', 1);

--
-- Dumping data for table `components`
--

INSERT INTO `components` (`id_component`, `part_number`, `name`, `description`, `stock`, `security_stock`, `wait_time`, `id_brand`, `id_measurement_unit`, `id_category`) VALUES
(1, 'COMP-160721-000001', 'B550m Ds3h', 'Motherboard Gigabyte B550m Ds3h Socket Am4, 4x Ddr4-sdram, 4x Sata Iii, 4x Usb 3.0, 4x Usb 2.0, 1x Hdmi, Micro Atx, (b550m Ds3h)', 50, 50, 2, 2, 1, 1),
(2, 'COMP-160721-000002', 'Ryzen 5 5600x', 'Processor Amd Ryzen 5 5600x, 3.7ghz, Socket Am4, 35mb Cache, 6 Nucleos-12 Hilos, (100-100000065box)\r\n', 50, 50, 2, 3, 1, 2),
(3, 'COMP-160721-000003', 'Vengeance Lpx', 'RAM Corsair Vengeance Lpx 8gb, Ddr4, 3600 Mhz, Cmk8gx4m1z3600c18\r\n', 50, 50, 2, 9, 1, 3),
(4, 'COMP-160721-000004', 'Swordfish 500gb', 'SSD M.2 Nvme Adata Swordfish 500gb, Pci-e Gen3x4, Lectura 1800mb/s, Escritura 1200mb/s (aswordfish-500g-c)', 50, 50, 2, 8, 1, 4),
(5, 'COMP-160721-000005', 'Masterbox Mb530p', 'Cabinet Cooler Master Masterbox Mb530p, Soporta Atx, Micro-atx, Mini-itx, Ventana Lateral, Ventiladores 120mm, Color Negro\r\n', 50, 50, 2, 7, 1, 5),
(6, 'COMP-160721-000006', 'SPR-0600NHFAW', 'Power supplier Thermaltake Smart Rgb, 600w, 20+4 Pin, 6 Sata, 3 Molex, 2 Pci-e 6+2, Ventilador 120mm Iluminacion Rgb, Certificacion 80 Plus', 50, 50, 2, 12, 1, 11),
(7, 'COMP-160721-000007', 'Gv-n710d5-2gl', 'Video card Gigabyte NVIDIA Gv-n710d5-2gl, 2gb Gddr5, Resolucion 4096x2160 Pixeles, Pci Express X8 2.0, 1-hdmi, 1-dvi, Color Negro', 50, 50, 2, 2, 1, 12);

--
-- Dumping data for table `measurement_units`
--

INSERT INTO `measurement_units` (`id_measurement_unit`, `name`, `code`, `pin_up`) VALUES
(1, 'Piece', 'PC', 0);

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id_product`, `serial_number`, `name`, `description`, `production_time`, `installed_capacity`, `stock`) VALUES
(1, 'SN-160721-00001', 'MRP GAMING PC', 'Test product', 1, 0, 10);

--
-- Dumping data for table `purchases`
--

INSERT INTO `purchases` (`id_purchase`, `reference_code`, `creation_date`, `details`) VALUES
(1, 'PURCHASE-160721-0001', '2021-07-16', 'Ok');

--
-- Dumping data for table `purchases_components`
--

INSERT INTO `purchases_components` (`id_component`, `id_purchase`, `quantity`) VALUES
(1, 1, 1);

--
-- Dumping data for table `sales`
--

INSERT INTO `sales` (`id_sale`, `reference_code`, `creation_date`, `details`) VALUES
(1, 'SALE-160721-0001', '2021-07-15', 'Ok');

--
-- Dumping data for table `sales_products`
--

INSERT INTO `sales_products` (`id_sale`, `id_product`, `quantity`, `status`) VALUES
(1, 1, 1, 0);

--
-- Dumping data for table `spreadsheet`
--

INSERT INTO `spreadsheet` (`id_component`, `id_product`, `quantity`) VALUES
(1, 1, 1),
(2, 1, 1),
(3, 1, 1),
(4, 1, 1),
(5, 1, 1),
(6, 1, 1),
(7, 1, 1);

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id_user`, `username`, `fullname`, `password`) VALUES
(1, 'admin', 'Oswaldo Dasaet Valadez Láriz', '$2a$10$A2vidM7fdPz9pm92gWJZzOwX2yIaJofkxWaqYGavsVAvxA4LpEoZ6');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
