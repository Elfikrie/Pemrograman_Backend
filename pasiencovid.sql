-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 15, 2025 at 09:31 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dbpasien`
--

-- --------------------------------------------------------

--
-- Table structure for table `pasiencovid`
--

CREATE TABLE `pasiencovid` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `address` text NOT NULL,
  `status` enum('Positive','Recovered','Dead','') NOT NULL,
  `in_date_at` date NOT NULL DEFAULT current_timestamp(),
  `out_date_at` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pasiencovid`
--

INSERT INTO `pasiencovid` (`id`, `name`, `phone`, `address`, `status`, `in_date_at`, `out_date_at`) VALUES
(1, 'Agus_S', '0813671900', 'Jln Sukamajaya, depok', 'Recovered', '2025-01-15', '2025-01-15'),
(2, 'Supri Yadi', '0813671345', 'Jln Sukamenang, depok', 'Positive', '2025-01-15', '2025-01-15');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pasiencovid`
--
ALTER TABLE `pasiencovid`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pasiencovid`
--
ALTER TABLE `pasiencovid`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
