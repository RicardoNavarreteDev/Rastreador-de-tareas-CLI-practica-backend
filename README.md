# Rastreador de Tareas CLI (Práctica Backend)

Este proyecto es una aplicación de línea de comandos (CLI) para gestionar tareas, desarrollado como práctica de backend. Permite a los usuarios agregar, listar, actualizar y eliminar tareas directamente desde la terminal.

## Características

- 📋 **Agregar tareas**: Crea nuevas tareas con descripciones.
- ✅ **Completar tareas**: Marca tareas como completadas.
- 🗑️ **Eliminar tareas**: Borra tareas que ya no necesitas.
- 📃 **Listar tareas**: Muestra todas las tareas pendientes y completadas.
- 💾 **Persistencia**: Las tareas se guardan en un archivo para que persistan entre sesiones.

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/RicardoNavarreteDev/Rastreador-de-tareas-CLI-practica-backend.git
   ```

2. Navega al directorio del proyecto:
   ```bash
   cd Rastreador-de-tareas-CLI-practica-backend
   ```

3. Asegúrate de tener [Node.js](https://nodejs.org/) instalado. Luego instala las dependencias:
   ```bash
   npm install
   ```

## Uso

1. Ejecuta la aplicación desde la terminal:
   ```bash
   node app.js
   ```

2. Accede a los comandos disponibles:
   ```bash
   node app.js --help
   ```

### Comandos principales
- `listar`: Muestra todas las tareas.
- `agregar`: Añade una nueva tarea. Ejemplo:
  ```bash
  node app.js agregar --descripcion="Mi nueva tarea"
  ```
- `completar`: Marca una tarea como completada. Ejemplo:
  ```bash
  node app.js completar --id=1
  ```
- `eliminar`: Elimina una tarea. Ejemplo:
  ```bash
  node app.js eliminar --id=1
  ```

## Contribuciones

¡Las contribuciones son bienvenidas! Si deseas colaborar, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama:
   ```bash
   git checkout -b mi-nueva-rama
   ```
3. Realiza tus cambios y haz un commit:
   ```bash
   git commit -m "Agregué una nueva característica"
   ```
4. Envía tus cambios:
   ```bash
   git push origin mi-nueva-rama
   ```
5. Abre un Pull Request.