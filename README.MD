# Instrucciones 

Este documento te guiará paso a paso sobre cómo levantar el entorno de desarrollo para el proyecto. 

## Requisitos previos

- **Docker**: [LINK](https://www.docker.com/get-started).
- **Node.js**: [LINK](https://nodejs.org/).

---

## Pasos para levantar el entorno

### 1. Levantar la base de datos con Docker Compose

Primero, debes levantar la base de datos utilizando Docker Compose. Esto asegurará que el contenedor de la base de datos se ejecute antes de que inicies el backend.

1. Navega a la carpeta donde se encuentra el archivo `docker-compose.yml`.
   
2. Ejecuta el siguiente comando para iniciar los servicios definidos en Docker Compose:
   ```bash
   docker-compose up
   ```

   Esto descargará las imágenes necesarias y levantará el contenedor de la base de datos. Espera a que el contenedor esté completamente iniciado.

### 2. Levantar el Backend

Una vez que la base de datos esté en funcionamiento, es hora de levantar el backend.

1. Navega a la carpeta del backend de tu proyecto.

2. Instala las dependencias necesarias:
   ```bash
   npm install
   ```

3. Ejecuta el backend en modo de desarrollo:
   ```bash
   npm run dev
   ```

   Esto levantará el servidor backend en el puerto `3250`. Asegúrate de que el backend esté corriendo correctamente antes de pasar al siguiente paso.

### 3. Levantar el Frontend

Ahora, es momento de levantar el frontend.

1. Navega a la carpeta del frontend de tu proyecto.

2. Instala las dependencias necesarias:
   ```bash
   npm install
   ```

3. Ejecuta el frontend en modo de desarrollo:
   ```bash
   npm run dev
   ```

   Esto levantará el servidor frontend. Deberías poder acceder a la aplicación desde tu navegador en `http://localhost:5250` (o el puerto configurado para el frontend).

---


