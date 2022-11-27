window.onload = function(){
    //alert("Hello world")
    var allSelected = JSON.parse(localStorage.getItem('date'))
    if(allSelected === null){
        allSelected = [];
    }

    for (let index = 0; index < allSelected.length; index++) {
        const element = allSelected[index];
        var selected = document.getElementById(element);
        rotate(selected.parentElement.parentElement)
    }

} 


function rotate(element){
    var selectedDate = element.querySelectorAll('.flip-card-front h1')[0].textContent
    var actualDate = new Date().getDate();
    var dates =[];
    /*
    * Zum Testen
    * var actualDate = 9;
    */
    if(selectedDate>actualDate){    
        alert("Leider ist das Datum zu groß")
    }else{
        var allSelected = JSON.parse(localStorage.getItem('date'))
        
        if(allSelected === null){
            allSelected = [];
        }
        
        console.log(allSelected);
        
        dates.push(selectedDate);
        
        localStorage.setItem("date",JSON.stringify([...new Set([...allSelected,...dates])]))
        
        element.style.transform = " rotateY(180deg)"
    }

    
}