drop database prueba;
create database if not exists prueba;
use prueba;

create table direccion(
    id_dir int auto_increment,
    descripcion varchar(255),
    primary key(id_dir)
);
create table rol(
    id_rol int auto_increment,
    nombre varchar(50) not null,
    primary key(id_rol)
);

create table empleado(
    id_empleado int auto_increment,
    nombre varchar(50) not null,
    apellido varchar(50) not null,
    no_licencia varchar(16) not null,
    telefono varchar(8) not null,
    id_dir int not null,
    id_rol int not null,
    primary key (id_empleado),
    foreign key(id_rol) references rol(id_rol),
    foreign key(id_dir) references direccion(id_dir)
);

create table tipovehiculo(
    id_tipovehiculo int auto_increment,
    nombre varchar(30),
    primary key (id_tipovehiculo)
);

create table vehiculo(
    id_vehiculo int auto_increment,
    id_tipovehiculo int not null, 
    placa varchar(30) not null,
    volumen float not null,
    id_dir int not null,
    combustibleconsumido float not null,
    depreciacion float not null,
    kilometraje float not null,
    primary key(id_vehiculo),
    foreign key (id_tipovehiculo) references tipovehiculo(id_tipovehiculo),
    foreign key(id_dir) references direccion(id_dir)
);