DROP DATABASE IF EXISTS DevChallengeDB;
GO

CREATE DATABASE DevChallengeDB;
GO

USE DevChallengeDB;
GO

CREATE TABLE users (
  userId        INT           NOT NULL  IDENTITY  PRIMARY KEY,
  firstName     VARCHAR(50)   NOT NULL,
  lastName      VARCHAR(50)   NOT NULL
);
GO

INSERT INTO users (firstName, lastName) VALUES 
  ('mark', 'twain'),
  ('tom', 'sawyer');
GO

CREATE TABLE tasks (
  taskId        INT           NOT NULL  IDENTITY  PRIMARY KEY,
  title         VARCHAR(256)  NOT NULL,
  description   VARCHAR(5000) NOT NULL
);
GO

INSERT INTO tasks (title, description) VALUES
  ('first', 'this is the first task'),
  ('second', 'this is the second task');
GO
