import * as readline from 'readline';
import { GestorIncidente } from './gestorIncidente';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const sistema = new GestorIncidente();

function mostrarMenu() {
    console.log("Sistema De Gestion Del Laboratorio C27");
    console.log("1. Crear un nuevo incidente");
    console.log("2. Obtener reportes");
    console.log("3. Salir");
    
    rl.question("Ingrese la opcion que desea realizar: ", (opcion) => {
        switch (opcion) {
            case "1":
                crearIncidenteFlujo();
                break;
            case "2":
                verReportesGuardadosFlujo();
                break;
            case "3":
                console.log("Saliendo del sistema...");
                rl.close();
                break;
            default:
                console.log("Opcion no valida, intente de nuevo.");
                mostrarMenu(); 
        }
    });
}

function crearIncidenteFlujo() {
    rl.question("ID (numero): ", (idStr) => {
        rl.question("Titulo: ", (titulo) => {
            rl.question("Descripcion: ", (desc) => {
                rl.question("Reportado por: ", (usuario) => {
                    sistema.crearIncidente(parseInt(idStr), titulo, desc, usuario, 'baja', 'abierto', new Date());
                    console.log("¡Incidente creado correctamente!");
                    mostrarMenu(); 
                });
            });
        });
    });
}

function verReportesGuardadosFlujo() {
    const reportes = sistema.obtenerTodosLosIncidentes();
    
    if (reportes.length === 0) {
        console.log("No hay incidentes registrados");
    } else {
        console.log("Lista De Incidentes");
        console.table(reportes);
    }
    
    mostrarMenu(); 
}

mostrarMenu();