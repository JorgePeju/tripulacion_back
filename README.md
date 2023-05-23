# tripulacion_back

# Enlace al repositorio front:
````
https://github.com/dorian-rose/tripulacion_front
````

# Enlace del despliegue de la API:

````
- https://h2ohback.onrender.com/
```` 
## Base de datos de entradas:

- Obtener todas las entradas:
````
- GET: https://h2ohback.onrender.com/api/v1/entries/
````  

- Obtener una entrada por ID o un usuario por su ID si existe su entrada:
````
- GET: https://h2ohback.onrender.com/api/v1/entries/:id
```` 
- Crear una entrada:
````
- POST: https://h2ohback.onrender.com/api/v1/entries/
````  

- Editar una entrada por id:
````
- PUT: https://h2ohback.onrender.com/api/v1/entries/:id
````
- Eliminar una entrada por id:
````
- DELETE: https://h2ohback.onrender.com/api/v1/entries/:id
````  
-Eliminar todas las entradas de un usuario por id:
 
## Base de datos de los usuarios:
- Obtener todos los usuarios:
````
- GET: https://h2ohback.onrender.com/api/v1/auth/
````
- Obtener un usuario por ID:
````
- GET: https://h2ohback.onrender.com/api/v1/auth/:id
````
- Crear un usuario:
````
- POST: https://h2ohback.onrender.com/api/v1/auth/register
````
- Editar un usuario por id:
````
- PUT: https://h2ohback.onrender.com/api/v1/auth/:id
````
- Eliminar un usuario por id:
````
- DELETE: https://h2ohback.onrender.com/api/v1/auth/users
````

## Endpoints de autentificación:

- Logear con un usuario:
````
- POST: https://h2ohback.onrender.com/api/v1/auth/login
````
- Delogear con un usuario:
````
- GET: https://h2ohback.onrender.com/api/v1/auth/logout
````
- Recuperar la contraseña de un usuario:
````
- POST: https://h2ohback.onrender.com/api/v1/auth/reset
````
