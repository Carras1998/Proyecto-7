# Proyecto de Red Social

## Descripción

Aplicación de red social para que los usuarios se registren, inicien sesión, publiquen contenido y gestionen sus cuentas. Los administradores pueden gestionar usuarios.

## Endpoints

### Autenticación

- **POST /api/v1/auth/register** - Registrar usuario.
- **POST /api/v1/auth/login** - Iniciar sesión.

### Usuarios

- **GET /api/v1/users** - Obtener todos los usuarios (Solo administradores).
- **GET /api/v1/users/:id** - Obtener usuario por ID.
- **PUT /api/v1/users/:id** - Actualizar usuario.
- **DELETE /api/v1/users/:id** - Eliminar usuario.

### Publicaciones

- **GET /api/v1/posts** - Obtener todas las publicaciones.
- **GET /api/v1/posts/:id** - Obtener publicación por ID.
- **POST /api/v1/posts** - Crear publicación.
- **PUT /api/v1/posts/:id** - Actualizar publicación.
- **DELETE /api/v1/posts/:id** - Eliminar publicación.

## Instalación

1. Clona el repositorio.
2. Instala dependencias: `npm install`.
3. Configura el archivo `.env`.
4. Ejecuta el servidor: `npm run dev`.

## .env

Incluye en el archivo `.env` las siguientes variables:

```env
  DB_URL=mongodb+srv://sergiomejiascarrascosa:b3fV0tvP2DQMReUr@cluster0.nt9prwn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
  JWT_SECRET=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YTg5YjhhMTRlMDFkNzY1Y2ZhOGNkNiIsImlhdCI6MTcyMjMyNzEzNywiZXhwIjoxNzUzODg0NzM3fQ.KSWHl4IGkrk-bYvlQVCV5jMPL8_XcJ7lYprY-04SvdE
```
