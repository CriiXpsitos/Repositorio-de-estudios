import { usePlayerStore } from "@/store/playerStore";

const myScript = () => {
    const { currentSong } = usePlayerStore()
    console.log(currentSong)
    const rows = document.querySelectorAll('tbody tr');

    rows.forEach(row => {
        row.addEventListener('dblclick', (e) => {
            console.log(e);
            alert("Fila seleccionada");
        });
    });
}

document.addEventListener("astro:after-swap", myScript, true);
document.addEventListener("DOMContentLoaded", myScript, true);