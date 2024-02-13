### This is node js product ,texting this project
### firs of all install node related packages.
### Like npm install,npm install express,sqlite3,body-parser,cors,jsonwebtoken,bcrypt(for password ).
### npm install nodemailer.

before start testing you go nodemailer.js file and change host,port ,auth- user,pass in createTransport.
for testing email sending or you can go etheral.com for testing and create account button click copy email and password without change host ,port change auth-user(copy email enter),pass(copy password enter).
than enter from and to email.
than start tesing.
follow this steps line by line.
signup,MFA check email if use etheral.email click or copy this url (etheral.email) and paste browser email show click verify test show otp, copy and paste otp login CURL verificationcode field than enter.
### if login success and generated token copy in paste product token header like -h "Authorization:Bearer token paste." this is only example you use below curl requests after login .

### if you don't understand check below check admin and user different curl. 


### signup
curl -X POST -H "Content-Type: application/json" -d '{"name":"user surname11","email":"usersurname@example8897yopmail.com","password":"secretpassword211","type":"admin"}' http://localhost:3000/register

### MFA
curl -X POST -H "Content-Type: application/json" -d '{"email":"usersurname@example8897yopmail.com"}' http://localhost:3000/mfaverify

### login
curl -X POST -H "Content-Type: application/json" -d '{"name":"user surname11","email":"usersurname@example8897yopmail.com","password":"secretpassword211","type":"admin","verificationcode":"376528"}' http://localhost:3000/login

### product testing
### GET ALL PRODIUCT (PERMISSION BOTH USER AND ADMIN)
curl -H "Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImVtYWlsIjoidXNlcnN1cm5hbWVAZXhhbXBsZTg4OTd5b3BtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcwNzgyNTgyNiwiZXhwIjoxNzA3ODI5NDI2fQ.zAVVIaELQgC5zxyO2usRsm0tzDdzCVX_zUKMVhJfr2U"  http://localhost:3000/productlist


### GET SINGLE PRODUCT BY ID (PERMISSION BOTH USER AND ADMIN)
curl -H "Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImVtYWlsIjoidXNlcnN1cm5hbWVAZXhhbXBsZTg4OTd5b3BtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcwNzgyNTgyNiwiZXhwIjoxNzA3ODI5NDI2fQ.zAVVIaELQgC5zxyO2usRsm0tzDdzCVX_zUKMVhJfr2U" http://localhost:3000/product/:id

### POST PRODUCT (PERMISSION BOTH USER AND ADMIN)
curl -X POST http://localhost:3000/updateProduct/:10  -H "Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImVtYWlsIjoidXNlcnN1cm5hbWVAZXhhbXBsZTg4OTd5b3BtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcwNzgyNTgyNiwiZXhwIjoxNzA3ODI5NDI2fQ.zAVVIaELQgC5zxyO2usRsm0tzDdzCVX_zUKMVhJfr2U" -H "Content-Type: application/json" -d '{"name": "Updated Product Name", "price": "19.99",    "category": "Updated Category","company": "Updated Company","description": "Updated Product Description"}'

### PUT PRODUCT  (PERMISSION BOTH USER AND ADMIN)
curl -X PUT http://localhost:3000/updateProduct/:10  -H "Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImVtYWlsIjoidXNlcnN1cm5hbWVAZXhhbXBsZTg4OTd5b3BtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcwNzgyNTgyNiwiZXhwIjoxNzA3ODI5NDI2fQ.zAVVIaELQgC5zxyO2usRsm0tzDdzCVX_zUKMVhJfr2U" -H "Content-Type: application/json" -d '{"name": "Updated Product Name", "price": "19.99",    "category": "Updated Category","company": "Updated Company","description": "Updated Product Description"}'


### DELETE PRODUCT (PERMISSION ONLY ADMIN)
curl -X DELETE   -H "Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImVtYWlsIjoidXNlcnN1cm5hbWVAZXhhbXBsZTg4OTd5b3BtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcwNzgyNTgyNiwiZXhwIjoxNzA3ODI5NDI2fQ.zAVVIaELQgC5zxyO2usRsm0tzDdzCVX_zUKMVhJfr2U" http://localhost:3000/productdelete/:id


# FOR ADMIN

curl -X POST -H "Content-Type: application/json" -d '{"name":"user surname11","email":"usersurname@example88.com","password":"secretpassword12","type":"admin"}' http://localhost:3000/register


curl -X POST -H "Content-Type: application/json" -d '{"name":"user surname11","email":"usersurname@example88.com","password":"secretpassword12","type":"admin"}' http://localhost:3000/login

curl -H "Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImVtYWlsIjoidXNlcnN1cm5hbWVAZXhhbXBsZTg4LmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcwNzcxMTU0NCwiZXhwIjoxNzA3NzE1MTQ0fQ.tZ7pysH9wQQ4J62EPMnZ4pYIPDjd3MM4Pq6eYLfQ_Z8"  http://localhost:3000/productlist

curl -H "Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImVtYWlsIjoidXNlcnN1cm5hbWVAZXhhbXBsZTg4LmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcwNzQ2Nzk1NiwiZXhwIjoxNzA3NTAzOTU2fQ.GWvDVh7SYo7tpWoFPI3H0rx1hOmhr4EADY5YrpcLdG4"  http://localhost:3000/productlist


# FOR USER

curl -X POST -H "Content-Type: application/json" -d '{"name":"user surname11","email":"usersurname@example8897yopmail.com","password":"secretpassword211","type":"user"}' http://localhost:3000/register

curl -X POST -H "Content-Type: application/json" -d '{"email":"usersurname@example8897yopmail.com"}' http://localhost:3000/mfaverify

curl -X POST -H "Content-Type: application/json" -d '{"name":"user surname11","email":"usersurname@example8897yopmail.com","password":"secretpassword211","type":"user","verificationcode":"376528"}' http://localhost:3000/login

curl -H "Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImVtYWlsIjoidXNlcnN1cm5hbWVAZXhhbXBsZTg4OTd5b3BtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcwNzgyNTgyNiwiZXhwIjoxNzA3ODI5NDI2fQ.zAVVIaELQgC5zxyO2usRsm0tzDdzCVX_zUKMVhJfr2U"  http://localhost:3000/productlist
