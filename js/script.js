
function capodanno() {
    //data di oggi
    let oggi = new Date(); 
    //data per capodanno
    let capodanno = new Date(oggi.getFullYear() + 1, 0, 1); 

    let differenza = capodanno - oggi; 
    let secondi = Math.floor(differenza / 1000) % 60;
    let minuti = Math.floor(differenza / 1000 / 60) % 60;
    let ore = Math.floor(differenza / 1000 / 60 / 60) % 24;
    let giorni = Math.floor(differenza / 1000 / 60 / 60 / 24);
       // Visualizzazione del countdown
       let countdownASchermo = document.getElementById('countdown');
       countdownASchermo.innerHTML = giorni + " giorni, " + ore + " ore, " + minuti + " minuti, " + secondi + " secondi";
}    
   
// Aggiornamento del countdown per ogni secondo
setInterval(capodanno, 1000);
   
     
capodanno();
   

