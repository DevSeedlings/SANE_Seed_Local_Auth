CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name varchar(255),
  email varchar(255) UNIQUE,
  password varchar(255)
);
