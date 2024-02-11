# Nodejsprojectwith
curl -X POST -H "Content-Type: application/json" -d '{"name":"John Doe","email":"johndoe@example.com","password":"secretpassword"}' https://backenfdNodejs.akshaymalviya12.repl.co/api/register

### signup
curl -X POST -H "Content-Type: application/json" -d '{"name":"John Doe","email":"johndoe@example1.com","password":"secretpassword","type":"admin"}' http://localhost:3000/register
### login
curl -X POST -H "Content-Type: application/json" -d '{"name":"John Doe","email":"johndoe@example1.com","password":"$2b$10$z/ngnaMYUH/8kzKYptZRVuYhDP3wAsVgwSxtzT9h7x59HRgPcRLGW","type":"admin"}' http://localhost:3000/login





### product testing
curl -X POST http://localhost:3000/product -H "Content-Type: application/json" -d '{"name": "Product Name", "price":"9.99" , "category": "Category", "company": "Company","description": "Product description" }'
curl GET http://localhost:3000/productlist
curl http://localhost:3000/product/:id
curl -X PUT http://localhost:3000/updateProduct/:10 -H "Content-Type: application/json" -d '{"name": "Updated Product Name", "price": "19.99",    "category": "Updated Category","company": "Updated Company","description": "Updated Product Description"}'
curl -X DELETE http://localhost:3000/productdelete/:id

curl GET http://localhost:3000/productlist
curl http://localhost:3000/getRandomProduct/:9 
curl -X PUT http://localhost:3000/updateProduct/:10 -H "Content-Type: application/json" -d '{"name": "Updated Product Name", "price": "19.99",    "category": "Updated Category","company": "Updated Company","description": "Updated Product Description"}'
curl -X DELETE http://localhost:3000/productdelete/:10

curl http://localhost:3000//productnew/9 
 curl http://localhost:3000/productnew/8


 eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJqb2huZG9lQGV4YW1wbGUxLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcwNzM5NjgyM30.Zw7JBcPZsu-QUHv1hgktvcCkZI8kW1PtyVWFtMRSQUw

 curl -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJqb2huZG9lQGV4YW1wbGUxLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcwNzM5NjgyM30.Zw7JBcPZsu-QUHv1hgktvcCkZI8kW1PtyVWFtMRSQUw"  http://localhost:3000/productlist

curl -X POST http://localhost:3000/login -H "Content-Type: application/json" -d '{"username": "user1", "password": "password1"}'
curl -X GET http://localhost:3000/admin -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ1c2VyMSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA3NDA0NzQ0fQ.d9L5156CldMr_bGyGqL-1YQvRiuq49w-uv3V-DlroeM"
curl -X GET http://localhost:3000/user -H "Authorization: Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ1c2VyMSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA3NDA0NzQ0fQ.d9L5156CldMr_bGyGqL-1YQvRiuq49w-uv3V-DlroeM"
const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const db = new sqlite3.Database('products.db');


curl -X GET 'http://localhost:3000/search?query="John Doe"'
curl http://localhost:3000/search?query="John Doe"
const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const db = new sqlite3.Database('users.db');

// SQLite3 database setup
db.serialize(() => {
  db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, username TEXT, token TEXT)');
  // Insert some sample users with tokens
  db.run('INSERT INTO users (username, token) VALUES (?, ?)', ['user1', 'user1token']);
  db.run('INSERT INTO users (username, token) VALUES (?, ?)', ['admin', 'admintoken']);
});

// Middleware to check if token is valid by querying the database
const checkTokenValidity = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  const sql = 'SELECT * FROM users WHERE token = ?';
  db.get(sql, [token], (err, row) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Internal server error' });
    }
    if (!row) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    req.user = row; // Set the user information from the database row
    next();
  });
};

// Protected route to check token validity
app.get('/check', checkTokenValidity, (req, res) => {
  res.json({ message: 'Token is valid', user: req.user });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



curl -X POST -H "Content-Type: application/json" -d '{"name":"user surname11","email":"usersurname@example99.com","password":"secretpassword12","type":"admin"}' http://localhost:3000/register


curl -X POST -H "Content-Type: application/json" -d '{"name":"user surname11","email":"usersurname@example99.com","password":"$2b$10$0PEEoMgpNPP4TJmvWCu2uu68UrQpRK/KwXBUHpQdD6iA2upe9onzG","type":"admin"}' http://localhost:3000/login


curl -H "Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImVtYWlsIjoidXNlcnN1cm5hbWVAZXhhbXBsZTExNzg5c3MuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzA3NDY2MDUxLCJleHAiOjE3MDc0Njk2NTF9.FR0OXL6r8XEmyIrqgbqYeaMGidm27e4LBhuXXfbHbXQ"  http://localhost:3000/productlist

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImVtYWlsIjoidXNlcnN1cm5hbWVAZXhhbXBsZTExNzg5c3MuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzA3NDY2MzE5fQ.4OW9xdfHaQA64-oXu5HNY0ZPb0udatMdj8Oc5EjUC2c
curl http://localhost:3000/adminget 

curl -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImVtYWlsIjoidXNlcnN1cm5hbWVAZXhhbXBsZTk5LmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcwNzQ2NzMyNCwiZXhwIjoxNzA3NDcwOTI0fQ.c2VqFYI5vdP6Np0e3w0A_fyKyWesmV422wuJFEkDfUE" http://localhost:3000/productlist


curl -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImVtYWlsIjoidXNlcnN1cm5hbWVAZXhhbXBsZTk5LmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcwNzQ2NzQ1MiwiZXhwIjoxNzA3NDcxMDUyfQ.bKzaKXVanq73WKIbJQ4sForNE7feAr9Db78cBwixXFM" http://localhost:3000/productlist




curl -X POST -H "Content-Type: application/json" -d '{"name":"user surname11","email":"usersurname@example88.com","password":"secretpassword12","type":"admin"}' http://localhost:3000/register


curl -X POST -H "Content-Type: application/json" -d '{"name":"user surname11","email":"usersurname@example88.com","password":"$2b$10$nlBgMV2PVxavq7zkH4Iim.Tq/0jatIxdZx0hZLQBltTKEgadUhFZS","type":"admin"}' http://localhost:3000/login


curl -H "Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImVtYWlsIjoidXNlcnN1cm5hbWVAZXhhbXBsZTg4LmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcwNzQ2ODUyNywiZXhwIjoxNzA3NDY4ODI3fQ.W6s3v7VItHs20Iq2ltUPScK5yZ_NycWZrVevIBG8jFc"  http://localhost:3000/productlist

curl -H "Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImVtYWlsIjoidXNlcnN1cm5hbWVAZXhhbXBsZTg4LmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcwNzQ2Nzk1NiwiZXhwIjoxNzA3NTAzOTU2fQ.GWvDVh7SYo7tpWoFPI3H0rx1hOmhr4EADY5YrpcLdG4"  http://localhost:3000/productlist
