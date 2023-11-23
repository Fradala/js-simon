
function capodanno() {
    //data di oggi
    let oggi = new Date(); 
    //data per capodanno
    let capodanno = new Date(oggi.getFullYear() + 1, 0, 1); 

    let differenza = capodanno - oggi; 
