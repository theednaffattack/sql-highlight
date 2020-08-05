const KEYWORDS_UPPER = [
  "ADD",
  "ADD CONSTRAINT",
  "ALTER",
  "ALTER COLUMN",
  "ALTER TABLE",
  "ALL",
  "AND",
  "ANY",
  "AS",
  "ASC",
  "BACKUP DATABASE",
  "BETWEEN",
  "CASE",
  "CHECK",
  "COLUMN",
  "CONSTRAINT",
  "CREATE",
  "CREATE DATABASE",
  "CREATE INDEX",
  "CREATE OR REPLACE VIEW",
  "CREATE TABLE",
  "CREATE PROCEDURE",
  "CREATE UNIQUE INDEX",
  "CREATE VIEW",
  "DATABASE",
  "DEFAULT",
  "DELETE",
  "DESC",
  "DISTINCT",
  "DROP",
  "DROP COLUMN",
  "DROP CONSTRAINT",
  "DROP DATABASE",
  "DROP DEFAULT",
  "DROP INDEX",
  "DROP TABLE",
  "DROP VIEW",
  "EXEC",
  "EXISTS",
  "FOREIGN KEY",
  "FROM",
  "FULL OUTER JOIN",
  "GROUP BY",
  "HAVING",
  "IN",
  "INDEX",
  "INNER JOIN",
  "INSERT INTO",
  "INSERT INTO SELECT",
  "IS NULL",
  "IS NOT NULL",
  "JOIN",
  "LEFT JOIN",
  "LIKE",
  "LIMIT",
  "NOT",
  "NOT NULL",
  "OR",
  "ORDER BY",
  "OUTER JOIN",
  "PRIMARY KEY",
  "PROCEDURE",
  "RIGHT JOIN",
  "ROWNUM",
  "SELECT",
  "SELECT DISTINCT",
  "SELECT INTO",
  "SELECT TOP",
  "SET",
  "TABLE",
  "TOP",
  "TRUNCATE TABLE",
  "UNION",
  "UNION ALL",
  "UNIQUE",
  "UPDATE",
  "VALUES",
  "VIEW",
  "WHERE",
  "PRAGMA",
  "INTEGER",
  "PRIMARY",
  "letCHAR",
  "DATETIME",
  "NULL",
  "REFERENCES",
  "INDEX_LIST",
  "BY",
  "CURRENT_DATE",
  "CURRENT_TIME",
  "EACH",
  "ELSE",
  "ELSEIF",
  "FALSE",
  "FOR",
  "GROUP",
  "IF",
  "INSERT",
  "INTERVAL",
  "INTO",
  "IS",
  "KEY",
  "KEYS",
  "LEFT",
  "MATCH",
  "ON",
  "OPTION",
  "ORDER",
  "OUT",
  "OUTER",
  "REPLACE",
  "TINYINT",
  "RIGHT",
  "THEN",
  "TO",
  "TRUE",
  "WHEN",
  "UNSIGNED",
  "CASCADE",
  "ENGINE",
  "TEXT",
  "AUTO_INCREMENT",
  "SHOW",
];

export const keywords = [
  ...KEYWORDS_UPPER,
  ...KEYWORDS_UPPER.map((keyword) => keyword.toLowerCase()),
];
