CREATE DATABASE shopping;

USE shopping;

CREATE TABLE customers (
id integer not null auto_increment,
name varchar(100) not null,
email varchar(255) not null, 
password varchar(64) not null,
line1 varchar(100) not null,
line2 varchar(100) not null, 
city varchar(15) not null, 
state varchar(2) not null, 
zipCode integer(5) not null,
phone varchar(15) not null,
creditCard integer(16) not null,
expirationDate date not null, 
cvv integer(3) not null,
billingZipCode integer(5) not null,
PRIMARY KEY (`id`)
);

-- insert into customers (name, email, password, line1, line2, city, state, zipCode, phone, creditCard, expirationDate, cvv, billingZipCode) 
-- 	values ('marlon sullivan', 'sullivan.marlon@gmail.com', 'navyseals88',
-- 	 '1400 Love St.', 'Apt A', 'San Francisco', 'CA', 94115, 4159298860, 4444888833339999, 2018-00-12, 345, 94115 );

/*  Execute this file from the command line by typing:
 *    mysql -u root < /schema.sql
 *  to create the database and the tables.*/