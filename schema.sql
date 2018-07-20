DROP DATABASE IF EXISTS reviews;

CREATE DATABASE reviews;

SET GLOBAL local_infile = 'ON';

USE reviews;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  picture varchar(150) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE reviews (
  id int NOT NULL AUTO_INCREMENT,
  user_id int NOT NULL,
  room_id int NOT NULL,
  date varchar(30) NOT NULL,
  comment varchar(500) NOT NULL default 0,
  accuracy int NOT NULL,
  communication int NOT NULL,
  cleanliness int NOT NULL,
  location int NOT NULL,
  check_in int NOT NULL,
  value int NOT NULL,
  average int NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

LOAD DATA LOCAL INFILE './users.csv' 
INTO TABLE users 
FIELDS TERMINATED BY ',' 
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA LOCAL INFILE './reviews.csv' 
INTO TABLE reviews 
FIELDS TERMINATED BY ',' 
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;