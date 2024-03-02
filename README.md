# Desafio Soft-Jobs

- En este desafio se creo un servidor para la autenticación y autorización de usuarios usando JWT.

<br>

## Autor
- Proyecto Backend [José Manuel Luque]

## Requisitos antes de la instalación
- Node versión recomendada ![nodes](https://img.shields.io/badge/node-v18.16.0-gray?style=flat&logo=node.js&logoColor=white&color=339933)

<br>

## Procedimiento para iniciar el proyecto
- Crear base de datos en 
-------
- [PostgreSQL](https://www.postgresql.org/)

```bash
CREATE DATABASE softjobs;
```
```bash
    \c softjobs
```
```bash
    CREATE TABLE usuarios ( id SERIAL, email VARCHAR(50) NOT NULL, password VARCHAR(60) NOT NULL, rol VARCHAR(25), lenguage VARCHAR(20) );
```

- Clonar el proyecto
- Ir hacia el directorio del proyecto

Instalar dependencias:

### Instalar dependencias para el backend

```bash
  cd backend
  npm install
```
# NOTA IMPORTANTE debe crear el archivo .env 

- como se indica en el ejemplo debe crear el archivo .env con la informacion del archivo .env.example en la caperta backend

Levantar proyecto

```bash
  npm run dev
```
## Rutas del servidor 
 - POST: /usuarios : Permite el registro de nuevos usuarios.
- POST: /login : Recibe las credenciales de un usuario y devuelve un token generado con JWT. La dirección de correo electrónico del usuario registrado se incluye en la carga útil del token.
- GET: /usuarios : Devuelve los datos de un usuario en caso de que esté autenticado.

<br>

## Para registrar un nuevo usuario 
```html
METHOD: POST 
ENDPOINT: localhost:3000/usuarios/
```
```json
BODY JSON

{
    "email": "",
    "password": "",
    "rol": "",
    "lenguage": ""
}
```
<br>

## Para loguearte: 

```html
METHOD: POST
ENDPOINT: localhost:3000/login/
```
```json
BODY JSON

{
    "email": "",
    "password": ""
}
```
<br>

## Para obtener perfil de usuario

```
METHOD: GET
ENDPOINT: localhost:3000/usuarios
AUTHORIZATION: Type Bearer Token
```
<br>




