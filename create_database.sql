-- create_database.sql
DROP DATABASE IF EXISTS "Netflix_Userbase" ;

-- Crear la base de datos
CREATE DATABASE "Netflix_Userbase";

-- Conectarse a la base de datos
\c Netflix_Userbase

--Crear la tabla de tipos de suscripciones
CREATE TABLE IF NOT EXISTS SubscriptionTypes (
    SubscriptionTypeID SERIAL PRIMARY KEY,
    SubscriptionType VARCHAR(255) NOT NULL
);

-- Crear tabla Devices
CREATE TABLE IF NOT EXISTS Devices (
    DeviceID SERIAL PRIMARY KEY,
    DeviceName VARCHAR(255) NOT NULL
);

-- Crear tabla Users
CREATE TABLE IF NOT EXISTS Users (
    UserID SERIAL PRIMARY KEY,
    SubscriptionTypeID INT,
    MonthlyRevenue INT,
    JoinDate DATE,
    LastPaymentDate DATE,
    Country VARCHAR(255) NOT NULL,
    Age INT,
    Gender VARCHAR(255) NOT NULL,
    DeviceID INT,
    PlanDuration VARCHAR(255) NOT NULL,
    FOREIGN KEY (SubscriptionTypeID) REFERENCES SubscriptionTypes(SubscriptionTypeID),
    FOREIGN KEY (DeviceID) REFERENCES Devices(DeviceID)
);

-- Crear la tabla netflix_data
CREATE TABLE IF NOT EXISTS public.netflix_data (
    "User ID" INT,
    "Subscription Type" VARCHAR(255),
    "Monthly Revenue" FLOAT,
    "Join Date" DATE,
    "Last Payment Date" DATE,
    "Country" VARCHAR(255),
    "Age" INT,
    "Gender" VARCHAR(255),
    "Device" VARCHAR(255),
    "Plan Duration" INT
);

