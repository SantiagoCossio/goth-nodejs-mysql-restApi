CREATE DATABASE IF NOT EXISTS GOTH;

USE GOTH;

CREATE TABLE Clientes(
    id INT(11) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(35) DEFAULT NULL,
    telefono Varchar(12)DEFAULT NULL,
    PRIMARY KEY (id) 
);

DESCRIBE Clientes;

INSERT INTO Clientes VALUES (1,'Juan Rodriguez', '3127638796'), 
                            (2,'Camilo Gómez', '3456723535'),
                            (3,'Jenifer Arango', '3758355652'),
                            (4,'Alejandra Velazques', '3135267665');