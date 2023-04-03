// conditionals operators as If, Else, Elif 
function viajar (destino) {
    if (destino == "Brasil") { 
        console.log("Gire a la Izquierda");
    } else if (destino == "Argentina" ) { 
        console.log("Gire a la Derecha");
    } else { 
        console.log("Nos Perdimos");
    }
}

viajar("Argentina")

// funcion condicional para edad 

function canDrive (edad) { 
    if (edad >= 18) {
        console.log('Can drive');
    } else {
        console.log('Can\'t drive');
    }
}
canDrive(19)
canDrive(12)