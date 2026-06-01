# API REST - Sistema de Medidas para Confección de Ropa 

##  Descripción

Esta es una API REST desarrollada en TypeScript que permite gestionar una base de datos de medidas corporales para negocios de confección de ropa. La API facilita el almacenamiento, consulta, actualización y eliminación de las medidas de los clientes, optimizando el proceso de toma de medidas y confección de prendas personalizadas.

##  Propósito

Esta API está diseñada específicamente para sastres, modistas y profesionales de la confección que necesitan:
- Almacenar las medidas corporales completas de sus clientes
- Consultar rápidamente las medidas de cualquier cliente
- Actualizar medidas cuando sea necesario
- Mantener un registro organizado de todos sus clientes
- Gestionar información de contacto junto con las medidas

##  Tecnologías Utilizadas

- **Node.js** - Entorno de ejecución
- **TypeScript** - Lenguaje de programación
- **Express** - Framework web
- **MongoDB** - Base de datos NoSQL
- **Mongoose** - ODM para MongoDB
- **Zod** - Validación de esquemas
- **Morgan** - Logger de peticiones HTTP
- **CORS** - Manejo de peticiones entre dominios

##  Instalación

### Prerrequisitos

- Node.js (v18 o superior)
- MongoDB (local o MongoDB Atlas)
- npm o bun

### Pasos de instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/programadorisgod/API-REST-TYPESCRIPT.git
cd API-REST-TYPESCRIPT
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**

Crea un archivo `.env` en la raíz del proyecto basándote en `.env.example`:

```env
CONEXION_STRING=mongodb://localhost:27017/medidas_confeccion
PORT=4000
```

Para MongoDB Atlas, usa una cadena de conexión como:
```env
CONEXION_STRING=mongodb+srv://usuario:password@cluster.mongodb.net/medidas_confeccion
PORT=4000
```

4. **Ejecutar la aplicación**

En modo desarrollo:
```bash
npm run dev
```

En modo producción:
```bash
npm run build
npm start
```

La API estará disponible en `http://localhost:4000`

## 📐 Campos de Medidas

La API almacena las siguientes medidas corporales (todas en centímetros):

| Campo | Significado | Descripción |
|-------|-------------|-------------|
| **AE** | Ancho de Espalda | Medida de hombro a hombro en la espalda |
| **TD** | Talle Delantero | Desde el hombro hasta la cintura (parte frontal) |
| **TE** | Talle Espalda | Desde el hombro hasta la cintura (parte trasera) |
| **CP** | Contorno de Pecho | Perímetro del pecho en su parte más ancha |
| **ALB** | Altura de Busto | Desde el hombro hasta la punta del busto |
| **SB** | Separación de Busto | Distancia entre ambos bustos |
| **CC** | Contorno de Cintura | Perímetro de la cintura |
| **CK** | Contorno de Cadera | Perímetro de la cadera en su parte más ancha |
| **ALK** | Altura de Cadera | Desde la cintura hasta la cadera |
| **LT** | Largo Total | Longitud total de la prenda (desde cuello hasta largo deseado) |
| **LM** | Largo de Manga | Desde el hombro hasta la muñeca |
| **LSH** | Largo de Short | Desde la cintura hasta el largo deseado del short |

##  Endpoints de la API

### URL Base
```
http://localhost:4000/api/v1/users
```

### 1. 🏠 Ruta Principal

#### `GET /`
Verifica que la API está funcionando.

**Petición:**
```bash
curl http://localhost:4000/
```

**Respuesta:**
```json
{
  "msg": "Welcome to my api TS",
  "data": {
    "metodo": "GET",
    "url": "/"
  }
}
```

---

### 2.  Obtener Todos los Clientes

#### `GET /api/v1/users`
Obtiene la lista completa de todos los clientes con sus medidas.

**Petición:**
```bash
curl http://localhost:4000/api/v1/users
```

**Respuesta Exitosa (200):**
```json
{
  "users": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "name": "María González",
      "email": "maria.gonzalez@email.com",
      "phoneNumber": "+52 55 1234 5678",
      "measueres": {
        "AE": 38,
        "TD": 42,
        "TE": 40,
        "CP": 92,
        "ALB": 28,
        "SB": 20,
        "CC": 70,
        "CK": 98,
        "ALK": 20,
        "LT": 105,
        "LM": 60,
        "LSH": 35
      },
      "createdAt": "2024-01-15T10:30:00.000Z",
      "updatedAt": "2024-01-15T10:30:00.000Z"
    }
  ]
}
```

---

### 3.  Obtener Cliente por ID

#### `GET /api/v1/users/:id`
Obtiene la información y medidas de un cliente específico.

**Parámetros:**
- `id` (en URL): ID de MongoDB del cliente

**Petición:**
```bash
curl http://localhost:4000/api/v1/users/507f1f77bcf86cd799439011
```

**Respuesta Exitosa (200):**
```json
{
  "user": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "María González",
    "email": "maria.gonzalez@email.com",
    "phoneNumber": "+52 55 1234 5678",
    "measueres": {
      "AE": 38,
      "TD": 42,
      "TE": 40,
      "CP": 92,
      "ALB": 28,
      "SB": 20,
      "CC": 70,
      "CK": 98,
      "ALK": 20,
      "LT": 105,
      "LM": 60,
      "LSH": 35
    },
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  }
}
```

**Respuesta de Error (404):**
```json
{
  "msg": "id is malformed"
}
```

---

### 4. ➕ Crear Nuevo Cliente

#### `POST /api/v1/users/create`
Crea un nuevo cliente con sus medidas.

**Headers:**
```
Content-Type: application/json
```

**Petición:**
```bash
curl -X POST http://localhost:4000/api/v1/users/create \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Carlos Rodríguez",
    "email": "carlos.rodriguez@email.com",
    "phoneNumber": "+52 55 9876 5432",
    "measueres": {
      "AE": 42,
      "TD": 45,
      "TE": 43,
      "CP": 100,
      "ALB": 30,
      "SB": 22,
      "CC": 85,
      "CK": 102,
      "ALK": 22,
      "LT": 110,
      "LM": 65,
      "LSH": 40
    }
  }'
```

**Cuerpo de la Petición (JSON):**
```json
{
  "name": "Carlos Rodríguez",
  "email": "carlos.rodriguez@email.com",
  "phoneNumber": "+52 55 9876 5432",
  "measueres": {
    "AE": 42,
    "TD": 45,
    "TE": 43,
    "CP": 100,
    "ALB": 30,
    "SB": 22,
    "CC": 85,
    "CK": 102,
    "ALK": 22,
    "LT": 110,
    "LM": 65,
    "LSH": 40
  }
}
```

**Respuesta Exitosa (201):**
```json
{
  "newUser": {
    "_id": "507f1f77bcf86cd799439012",
    "name": "Carlos Rodríguez",
    "email": "carlos.rodriguez@email.com",
    "phoneNumber": "+52 55 9876 5432",
    "measueres": {
      "AE": 42,
      "TD": 45,
      "TE": 43,
      "CP": 100,
      "ALB": 30,
      "SB": 22,
      "CC": 85,
      "CK": 102,
      "ALK": 22,
      "LT": 110,
      "LM": 65,
      "LSH": 40
    },
    "createdAt": "2024-01-15T11:00:00.000Z",
    "updatedAt": "2024-01-15T11:00:00.000Z"
  }
}
```

**Respuesta de Error (400):**
```json
{
  "msg": "Body is empty"
}
```

---

### 5.  Actualizar Cliente

#### `PATCH /api/v1/users/update/:id`
Actualiza la información y/o medidas de un cliente existente.

**Parámetros:**
- `id` (en URL): ID de MongoDB del cliente

**Headers:**
```
Content-Type: application/json
```

**Petición:**
```bash
curl -X PATCH http://localhost:4000/api/v1/users/update/507f1f77bcf86cd799439011 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "María González Pérez",
    "phoneNumber": "+52 55 1234 9999",
    "measueres": {
      "AE": 38,
      "TD": 42,
      "TE": 40,
      "CP": 94,
      "ALB": 28,
      "SB": 20,
      "CC": 72,
      "CK": 100,
      "ALK": 20,
      "LT": 105,
      "LM": 60,
      "LSH": 35
    }
  }'
```

**Cuerpo de la Petición (JSON) - Puedes enviar solo los campos a actualizar:**
```json
{
  "name": "María González Pérez",
  "phoneNumber": "+52 55 1234 9999",
  "measueres": {
    "AE": 38,
    "TD": 42,
    "TE": 40,
    "CP": 94,
    "ALB": 28,
    "SB": 20,
    "CC": 72,
    "CK": 100,
    "ALK": 20,
    "LT": 105,
    "LM": 60,
    "LSH": 35
  }
}
```

**Respuesta Exitosa (200):**
```json
{
  "userUpdated": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "María González Pérez",
    "email": "maria.gonzalez@email.com",
    "phoneNumber": "+52 55 1234 9999",
    "measueres": {
      "AE": 38,
      "TD": 42,
      "TE": 40,
      "CP": 94,
      "ALB": 28,
      "SB": 20,
      "CC": 72,
      "CK": 100,
      "ALK": 20,
      "LT": 105,
      "LM": 60,
      "LSH": 35
    },
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T12:00:00.000Z"
  }
}
```

**Respuesta de Error (404):**
```json
{
  "msg": "User not found"
}
```

---

### 6.  Eliminar Cliente

#### `DELETE /api/v1/users/delete/:id`
Elimina un cliente y todas sus medidas de la base de datos.

**Parámetros:**
- `id` (en URL): ID de MongoDB del cliente

**Petición:**
```bash
curl -X DELETE http://localhost:4000/api/v1/users/delete/507f1f77bcf86cd799439011
```

**Respuesta Exitosa (200):**
```json
{
  "userDeleted": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "María González",
    "email": "maria.gonzalez@email.com",
    "phoneNumber": "+52 55 1234 5678",
    "measueres": {
      "AE": 38,
      "TD": 42,
      "TE": 40,
      "CP": 92,
      "ALB": 28,
      "SB": 20,
      "CC": 70,
      "CK": 98,
      "ALK": 20,
      "LT": 105,
      "LM": 60,
      "LSH": 35
    },
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  }
}
```

**Respuesta de Error (404):**
```json
{
  "msg": "User not found"
}
```

---

## 🔧 Códigos de Estado HTTP

La API utiliza los siguientes códigos de estado:

| Código | Descripción |
|--------|-------------|
| `200` | OK - Petición exitosa |
| `201` | Created - Recurso creado exitosamente |
| `400` | Bad Request - Petición mal formada o datos inválidos |
| `404` | Not Found - Recurso no encontrado |
| `500` | Internal Server Error - Error en el servidor |

##  Ejemplos de Uso con JavaScript/TypeScript

### Ejemplo con Fetch API

```javascript
// Crear un nuevo cliente
async function crearCliente() {
  const response = await fetch('http://localhost:4000/api/v1/users/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: "Ana López",
      email: "ana.lopez@email.com",
      phoneNumber: "+52 55 5555 5555",
      measueres: {
        AE: 36,
        TD: 40,
        TE: 38,
        CP: 88,
        ALB: 26,
        SB: 18,
        CC: 68,
        CK: 95,
        ALK: 19,
        LT: 100,
        LM: 58,
        LSH: 33
      }
    })
  });
  
  const data = await response.json();
  console.log(data);
}

// Obtener todos los clientes
async function obtenerClientes() {
  const response = await fetch('http://localhost:4000/api/v1/users');
  const data = await response.json();
  console.log(data.users);
}

// Actualizar cliente
async function actualizarCliente(id) {
  const response = await fetch(`http://localhost:4000/api/v1/users/update/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      phoneNumber: "+52 55 9999 9999"
    })
  });
  
  const data = await response.json();
  console.log(data);
}

// Eliminar cliente
async function eliminarCliente(id) {
  const response = await fetch(`http://localhost:4000/api/v1/users/delete/${id}`, {
    method: 'DELETE'
  });
  
  const data = await response.json();
  console.log(data);
}
```

### Ejemplo con Axios

```javascript
import axios from 'axios';

const API_URL = 'http://localhost:4000/api/v1/users';

// Crear cliente
const crearCliente = async () => {
  try {
    const response = await axios.post(`${API_URL}/create`, {
      name: "Pedro Martínez",
      email: "pedro.martinez@email.com",
      phoneNumber: "+52 55 7777 7777",
      measueres: {
        AE: 44,
        TD: 48,
        TE: 46,
        CP: 105,
        ALB: 32,
        SB: 24,
        CC: 90,
        CK: 108,
        ALK: 23,
        LT: 115,
        LM: 68,
        LSH: 42
      }
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

// Obtener todos los clientes
const obtenerClientes = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log(response.data.users);
  } catch (error) {
    console.error(error);
  }
};

// Obtener cliente por ID
const obtenerClientePorId = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    console.log(response.data.user);
  } catch (error) {
    console.error(error);
  }
};
```

## 🏗️ Estructura del Proyecto

```
API-REST-TYPESCRIPT/
├── src/
│   ├── config/
│   │   ├── connection.ts    # Configuración de MongoDB
│   │   ├── env.ts          # Validación de variables de entorno
│   │   └── port.ts         # Gestión de puertos
│   ├── controllers/
│   │   └── users.ts        # Controladores de usuarios
│   ├── interfaces/
│   │   └── user.interface.ts  # Interfaces TypeScript
│   ├── middleware/
│   │   └── validateBody.ts # Middleware de validación
│   ├── models/
│   │   └── users.ts        # Modelo de MongoDB
│   ├── routes/
│   │   └── user.ts         # Rutas de la API
│   ├── services/
│   │   └── users.ts        # Lógica de negocio
│   ├── utils/
│   │   └── handlerError.ts # Manejo de errores
│   └── index.ts            # Punto de entrada
├── .env                    # Variables de entorno (no incluido en git)
├── .env.example           # Ejemplo de variables de entorno
├── package.json           # Dependencias del proyecto
├── tsconfig.json         # Configuración de TypeScript
└── README.md             # Este archivo
```

##  Scripts Disponibles

```bash
# Modo desarrollo con recarga automática
pnpm run dev

# Compilar TypeScript a JavaScript
pnpm run build

# Ejecutar en producción
pnpm start

# Ejecutar linter
pnpm run lint
```

## 🐳 Docker

El proyecto incluye soporte para Docker:

```bash
# Construir imagen
docker build -t api-medidas-confeccion .

# Ejecutar contenedor
docker run -p 4000:4000 --env-file .env api-medidas-confeccion
```

##  Validaciones

- El email debe ser único en la base de datos
- Todos los campos de medidas son requeridos
- Todos los campos de medidas deben ser números
- El nombre, email y teléfono son campos obligatorios
- El body no puede estar vacío en peticiones POST y PATCH

##  Contribuir

1. Fork el proyecto
2. Crea tu rama de características (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia ISC.

##  Autor

 programadorisgod - Camidev

##  Soporte

Si tienes alguna pregunta o problema, por favor abre un issue en el repositorio.

---
