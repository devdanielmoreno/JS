window.onload = function() {
    const gruposAlumnos = [
        { "lugar": "1", "alumno1": "Aitor Fructuoso", "alumno2": "Lucía Rodríguez", "alumno3": "Bru Carreras" },
        { "lugar": "2", "alumno1": "Àlex Maench", "alumno2": "Adrià Milian", "alumno3": "Arnau Vicente" },
        { "lugar": "3", "alumno1": "Jose Daniel", "alumno2": "Daniel Moreno", "alumno3": "Toni Varón" },
        { "lugar": "4", "alumno1": "Manel Jarrega", "alumno2": "Carlos Rodríguez", "alumno3": "Oriol Fernandez" },
        { "lugar": "5", "alumno1": "Pol Aroca", "alumno2": "Marc Arjò", "alumno3": "Oriol Balagué" },
        { "lugar": "6", "alumno1": "Víctor Toro", "alumno2": "Alejandro Torrente", "alumno3": "Romà Sardà" },
        { "lugar": "7", "alumno1": "Marc Jimenez", "alumno2": "JoseJavier Pérez", "alumno3": "Oriol Gonzalez" },
        { "lugar": "8", "alumno1": "Helena Alba", "alumno2": "David López", "alumno3": "Álvaro Rico" },
        { "lugar": "9", "alumno1": "Victor Fernández", "alumno2": "Raúl March", "alumno3": "Mario Campos" },
        { "lugar": "10", "alumno1": "Steven Menéndez", "alumno2": "Christian Areste", "alumno3": "Daniel Jimenez" }
    ];

    const grupos = document.getElementsByClassName("grupos");
    const trr = document.getElementsByTagName("tr");
    const gruppo = document.getElementsByClassName("grupo");
    const pos = document.getElementsByClassName("pos");
    let selec = false;

    function visible(vis) {
        pos[vis].style.visibility = "visible";
        trr[gruposAlumnos[vis].lugar - 1].style.backgroundColor = "rgb(124, 183, 120, 0.6)";
        pos[vis].innerHTML = `${gruposAlumnos[vis].alumno1}<br>${gruposAlumnos[vis].alumno2}<br>${gruposAlumnos[vis].alumno3}`;
    }

    function esconde(hide) {
        pos[hide].style.visibility = "hidden";
        trr[gruposAlumnos[hide].lugar - 1].style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    }

    for (let x = 0; x < grupos.length; x++) {
        grupos[x].addEventListener('mouseover', () => visible(x));
        grupos[x].addEventListener('mouseout', () => esconde(x));
        grupos[x].addEventListener('click', () => {
            if (selec === false) {
                trr[gruposAlumnos[x].lugar - 1].className = "grupo2";
                selec = x;
            } else if (selec === x) {
                trr[gruposAlumnos[x].lugar - 1].className = "grupo";
                selec = false;
            }
        });
    }

    for (let y = 0; y < gruppo.length; y++) {
        gruppo[y].addEventListener('click', () => {
            if (selec !== false) {
                [gruposAlumnos[selec].lugar, gruposAlumnos[y].lugar] = [gruposAlumnos[y].lugar, gruposAlumnos[selec].lugar];
                selec = false;
            }

            for (let z = 0; z < trr.length; z++) {
                trr[z].className = "grupo";
            }
        });
    }
}