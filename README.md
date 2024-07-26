# Proyecto de Red Social

## Descripción

Este es un proyecto de red social que permite a los usuarios registrarse, iniciar sesión, crear publicaciones y gestionar sus cuentas. Los administradores tienen permisos adicionales para gestionar usuarios.

## Endpoints

### Autenticación

- **POST /api/v1/auth/register** - Registrar un nuevo usuario.
- **POST /api/v1/auth/login** - Iniciar sesión.

### Usuarios

- **GET /api/v1/users** - Obtener todos los usuarios (Solo administradores).
- **GET /api/v1/users/:id** - Obtener un usuario por ID.
- **PUT /api/v1/users/:id** - Actualizar un usuario.
- **DELETE /api/v1/users/:id** - Eliminar un usuario.

### Publicaciones

- **GET /api/v1/posts** - Obtener todas las publicaciones.
- **GET /api/v1/posts/:id** - Obtener una publicación por ID.
- **POST /api/v1/posts** - Crear una nueva publicación.
- **PUT /api/v1/posts/:id** - Actualizar una publicación.
- **DELETE /api/v1/posts/:id** - Eliminar una publicación.

## Instalación

1. Clona el repositorio
2. Instala las dependencias: `npm install`
3. Configura las variables de entorno en un archivo `.env`
4. Ejecuta el servidor: `npm run dev`

## .env

Asegúrate de incluir el archivo `.env` con las siguientes variables:
