var akc = [{
    img: "../../images/akcia/roza_ugoza.jpg",
    name: "Роза Ругоза",
    razm1: "0,8 - 1,0 м",
    dostup_razmer: "от 0,2 до 2 м",
    cena: "497 р.",
    star_cena:"",
    srok_akcia:"до 14 февраля"
},{
    img: "../../images/akcia/barbaris.jpg",
    name: "Барбарис",
    razm1: "0,4 - 0,6 м",
    dostup_razmer: "от 0,2 до 2 м",
    cena: "370 р.",
    star_cena: "690 р.",
    srok_akcia:"до 14 февраля"
},{
    img: "../../images/akcia/siren.jpg",
    name: "Сирень (смесь сортов)",
    razm1: "1,0 - 1,5 м",
    dostup_razmer: "от 0,2 до 2 м",
    cena: "97 р",
    star_cena: "3 950 р.",
    srok_akcia: "до 14 февраля"
}
]

function getRandomInt(min, max) 
    {
       return Math.floor(Math.random() * (max - min + 1)) + min;
    }


 function showAkcia(ind) {
    for (i = 0; i < akc.length; i++ )
   {
          s1 = "<table width = 98%>  <tr> <td> <p>" + akc[i].name + "</p> Высота: " + akc[i].razm1 + " <br></td> <td> <div style = 'background-color:#ffffff; font-size:120%; padding-left:1em; padding-top:0.2em; padding-bottom:0.2em'> <p style='font-size:140%; margin-top:0' > " + akc[i].cena + " </p> <bb1 style ='text-decoration:line-through' >" + akc[i].star_cena + "</bb1>  </div></td> </tr>";

            s2 = " <tr> <td> Доступные размеры <br>" + akc[i].dostup_razmer + "</td> <td> <p> Акция действует <br>"+akc[i].srok_akcia +" </p></td> </tr> ";

            var str = s1 + s2 + "</table>"

            $("#akcia").append("<div class = 'item'> <img src = " + akc[i].img + "><div class='s2'>" + str + "</div> </div>")
        
   }

}

 function show1() {
         $("#owl-demo").owlCarousel({

             navigation: false, // Show next and prev buttons
             slideSpeed: 300,
             paginationSpeed: 400,
             singleItem: true
         });

    
 };