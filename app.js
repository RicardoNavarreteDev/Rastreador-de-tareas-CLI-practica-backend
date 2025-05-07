// app.js

const fs = require('fs'); // Módulo para manejar archivos
const path = require('path'); // Módulo para manejar rutas de archivos

// Ruta del archivo JSON donde se almacenan las tareas
const archivoTareas = path.join(__dirname, 'tareas.json');

// Obtenemos los argumentos pasados desde la línea de comandos
const args = process.argv.slice(2); // Ignoramos los primeros dos argumentos (node y app.js)

// Función para leer las tareas desde el archivo JSON
function leerTareas() {
    if (!fs.existsSync(archivoTareas)) {
        return []; // Si el archivo no existe, devolvemos una lista vacía
    }
    const data = fs.readFileSync(archivoTareas, 'utf8');
    return JSON.parse(data || '[]'); // Si el archivo está vacío, devolvemos una lista vacía
}

// Función para guardar las tareas en el archivo JSON
function guardarTareas(tareas) {
    fs.writeFileSync(archivoTareas, JSON.stringify(tareas, null, 2), 'utf8');
}

// Función para manejar el comando "agregar"
function agregarTarea(nombre, prioridad) {
    const prioridadesValidas = ['baja', 'media', 'alta'];
    if (!nombre) {
        console.error('Error: Debes proporcionar un nombre para la tarea.');
        process.exit(1);
    }
    if (!prioridadesValidas.includes(prioridad)) {
        console.error(`Error: La prioridad debe ser una de las siguientes: ${prioridadesValidas.join(', ')}`);
        process.exit(1);
    }

    const tareas = leerTareas();
    const nuevaTarea = {
        id: tareas.length + 1, // Asignamos un ID incremental
        nombre,
        estado: 'pendiente', // Estado inicial
        fechaCreacion: new Date().toISOString().replace('T', ' ').split('.')[0], // Fecha de creación
        prioridad,
    };

    tareas.push(nuevaTarea);
    guardarTareas(tareas);

    console.log(`Tarea agregada: "${nombre}" con prioridad ${prioridad}.`);
}

// Verificamos el comando ingresado
if (args.length === 0) {
    console.log("Uso: node app.js <comando> [argumentos]");
    console.log("Comandos disponibles:");
    console.log("  agregar <tarea> <prioridad> - Agrega una nueva tarea con prioridad (baja, media, alta)");
    console.log("  listar                      - Lista todas las tareas");
    console.log("  eliminar <id>               - Elimina una tarea por ID");
    console.log("  actualizar <id> <estado>    - Actualiza el estado de una tarea");
    console.log("  tareas-realizadas           - Lista todas las tareas realizadas");
    console.log("  tareas-pendientes           - Lista todas las tareas pendientes");
    console.log("  tareas-en-progreso          - Lista todas las tareas en progreso");
    process.exit(0); // Finalizamos el programa
}

// Procesamos el comando "agregar"
const comando = args[0];
if (comando === 'agregar') {
    const nombre = args[1]; // Nombre de la tarea
    const prioridad = args[2]; // Prioridad de la tarea
    agregarTarea(nombre, prioridad);
} else {
    console.log(`Comando no reconocido: ${comando}`);
    process.exit(1);
}