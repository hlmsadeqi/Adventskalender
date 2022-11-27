/*const date ={   
    1: '<div id="flipper" class=" col flip-card-inner" onClick="rotate()"> <div class="flip-card-front"> <h1>1</h1></div><div class="flip-card-back"> <p>Jeder Mensch ist gleich.</p> </div></div>',
    2: '<div id="flipper" class=" col flip-card-inner" onClick="rotate()"> <div class="flip-card-front"> <h1>2</h1></div><div class="flip-card-back"> <img src="img\1.jpg"></div></div>',
    3: '<div id="flipper" class=" col flip-card-inner" onClick="rotate()"> <div class="flip-card-front"> <h1>3</h1></div><div class="flip-card-back"> <img src="img\2.jpg"></div></div>',
    4: '<div id="flipper" class=" col flip-card-inner" onClick="rotate()"> <div class="flip-card-front"> <h1>4</h1></div><div class="flip-card-back"> <p>Sagt die eine Kerze zur anderen. Wollen wir zusammen ausgehen!</p></div></div>',
    5: '<div id="flipper" class=" col flip-card-inner" onClick="rotate()"> <div class="flip-card-front"> <h1>5</h1></div><div class="flip-card-back"> <img src="img\3.jpg"></div></div>',
    6: '<div id="flipper" class=" col flip-card-inner" onClick="rotate()"> <div class="flip-card-front"> <h1>6</h1></div><div class="flip-card-back"> <p>Wahrlich, keiner ist weise, der nicht das Dunkel kennt.</p></div></div>',
    7: '<div id="flipper" class=" col flip-card-inner" onClick="rotate()"> <div class="flip-card-front"> <h1>7</h1></div><div class="flip-card-back"> <img src="img\4.jpg"></div></div>',
    8: '<div id="flipper" class=" col flip-card-inner" onClick="rotate()"> <div class="flip-card-front"> <h1>81</h1></div><div class="flip-card-back"> <p>Weisheit stellt sich nicht immer mit dem Alter ein. Manchmal kommt auch das Alter ganz allein.</p> </div></div>',
    9: '<div id="flipper" class=" col flip-card-inner" onClick="rotate()"> <div class="flip-card-front"> <h1>9</h1></div><div class="flip-card-back"> <img src="img\5.jpg" ></div></div>',
    10: '<div id="flipper" class=" col flip-card-inner" onClick="rotate()"> <div class="flip-card-front"> <h1>10</h1></div><div class="flip-card-back"> <img src="img\6.jpg"></div></div>',
    11: '<div id="flipper" class=" col flip-card-inner" onClick="rotate()"> <div class="flip-card-front"> <h1>11</h1></div><div class="flip-card-back"> <img src="img\7.jpg"></div></div>',
    12: '<div id="flipper" class=" col flip-card-inner" onClick="rotate()"> <div class="flip-card-front"> <h1>12</h1></div><div class="flip-card-back"> <img src="img\8.jpg"></div></div>',
    13: '<div id="flipper" class=" col flip-card-inner" onClick="rotate()"> <div class="flip-card-front"> <h1>13</h1></div><div class="flip-card-back"> <p>Alle Kinder tanzen um das Feuer, nur nicht Brigitte, die steht in der Mitte.</p> </div></div>',
    14: '<div id="flipper" class=" col flip-card-inner" onClick="rotate()"> <div class="flip-card-front"> <h1>14</h1></div><div class="flip-card-back"> <img src="img\9.jpg"></div></div>',
    15: '<div id="flipper" class=" col flip-card-inner" onClick="rotate()"> <div class="flip-card-front"> <h1>15</h1></div><div class="flip-card-back"> <p>Dumme Gedanken hat jeder, aber der Weise verschweigt sie.</p> </div></div>',
    16: '<div id="flipper" class=" col flip-card-inner" onClick="rotate()"> <div class="flip-card-front"> <h1>16</h1></div><div class="flip-card-back"> <img src="img\10.jpg"></div></div>',
    17: '<div id="flipper" class=" col flip-card-inner" onClick="rotate()"> <div class="flip-card-front"> <h1>17</h1></div><div class="flip-card-back"> <img src="img\11.jpg"></div></div>',
    18: '<div id="flipper" class=" col flip-card-inner" onClick="rotate()"> <div class="flip-card-front"> <h1>18</h1></div><div class="flip-card-back"> <p>Du siehst die Welt nicht so wie sie ist, du siehst die Welt so wie du bist.</p> </div></div>',
    19: '<div id="flipper" class=" col flip-card-inner" onClick="rotate()"> <div class="flip-card-front"> <h1>19</h1></div><div class="flip-card-back"> <img src="img\12.jpg"></div></div>',
    20: '<div id="flipper" class=" col flip-card-inner" onClick="rotate()"> <div class="flip-card-front"> <h1>20</h1></div><div class="flip-card-back"> <img src="img\13.jpg"></div></div>',
    21: '<div id="flipper" class=" col flip-card-inner" onClick="rotate()"> <div class="flip-card-front"> <h1>21</h1></div><div class="flip-card-back"> <p>Was ist grausamer als sieben Kinder in einer Mülltonne?<br/>Ein Kind in sieben Mülltonnen.</p> </div></div>',
    22: '<div id="flipper" class=" col flip-card-inner" onClick="rotate()"> <div class="flip-card-front"> <h1>22</h1></div><div class="flip-card-back"> <img src="img\14.jpg"></div></div>',
    23: '<div id="flipper" class=" col flip-card-inner" onClick="rotate()"> <div class="flip-card-front"> <h1>23</h1></div><div class="flip-card-back"> <p>Siri, warum sind Frauen so komisch zu mir?<br/>Mein Name ist Alexa!</p> </div></div>',
    24: '<div id="flipper" class=" col flip-card-inner" onClick="rotate()"> <div class="flip-card-front"> <h1>24</h1></div><div class="flip-card-back"> <img src="img\24.jpg"></div></div>',
}*/




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