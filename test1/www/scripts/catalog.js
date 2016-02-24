// лиственные
var hardwood = [   
    {
        img: "../../images/listven/lipa.jpg",
        name: "Липа",
        dat: [{ razm: "2-3м", cena: "2 970" }, { razm: "3-4м", cena: "3 700" },
              { razm: "4-5м", cena: "8 570" }, { razm: "5-6м", cena: "11 700" }, { razm: "6-7м", cena: "13 900" }]
    },
    {
           img: "../../images/listven/kashtan.jpg",
           name: "Каштан Конский",
           dat: [{ razm: "4-5м", cena: "15 970" }]
       },
    {
        img: "../../images/listven/rowan.jpg",
        name: "Рябина",
        dat: [{ razm: "2-3м", cena: "2 890" }, { razm: "3-4м", cena: "5 950" },
              { razm: "4-5м", cena: "8 970" }, { razm: "5-6м", cena: "10 800" }, { razm: "6-7м", cena: "13 970" }]
    },
    {
        img: "../../images/listven/oak.jpg",
        name: "Дуб",
        dat: [{ razm: "2-3м", cena: "3 170" }, { razm: "3-4м", cena: "6 570" },
              { razm: "4-5м", cena: "9 570" }, { razm: "5-6м", cena: "13 700" }, { razm: "6-7м", cena: "15 970" }]
    },
    {
        img: "../../images/listven/maple.jpg",
        name: "Клен Глобозум",
        dat: [{ razm: "3-4м", cena: "15 970" }]
    }
]

// крупномеры
var krupnomery = [
    {
        img: "../../images/krupnomery/sosna_obykn.jpg",
        name: "Сосна Обыкновенная",
        dat: [{ razm: "1-2м", cena: "1 970" }, { razm: "2-3м", cena: "3 390" }, { razm: "3-4м", cena: "5 970" },
              { razm: "4-5м", cena: "8 700" }, { razm: "5-6м", cena: "11 700" }, { razm: "6-7м", cena: "21 870" },
              { razm: "7-8м", cena: "29 790" }, { razm: "10+ м", cena: "Цена по запросу" }]
    },
    {
        img: "../../images/krupnomery/el_obykn.jpg",
       name: "Ель Обыкновенная",
       dat: [{ razm: "1-2м", cena: "1 770" }, { razm: "2-3м", cena: "2 970" }, { razm: "3-4м", cena: "4 970" },
                  { razm: "4-5м", cena: "8 390" }, { razm: "5-6м", cena: "12 990" }, { razm: "6-7м", cena: "16 950" },
                  { razm: "7-8м", cena: "27 800" }, { razm: "10+ м", cena: "Цена по запросу" }]
    },
    {
        img: "../../images/krupnomery/kedr_sib.jpg",
        name: "Кедр Сибирский",
        dat: [{ razm: "1,5-2м", cena: "9 970" }, { razm: "2-2,5м", cena: "13 700" }, { razm: "2,5-3м", cena: "15 970" },
                   { razm: "3-10м", cena: "13 000 п/м" }]
    },
    {
         img: "../../images/krupnomery/sosna_stel.jpg",
        name: "Cосны стелющиеся",
        dat: [{ razm: "0,5-0,7м", cena: "1 970" }, { razm: "0,7-1,0м", cena: "5 700" }, { razm: "1,0-1,5м", cena: "6 570" },
                   { razm: "3-10м", cena: "13 000 п/м" }]
     },
    {
        img: "../../images/krupnomery/el_blue.jpg",
        name: "Ель Голубая",
        dat: [{ razm: "2,0-2,5м", cena: "15 570" }, { razm: "3,0-4,0м", cena: "27 570" }]
    },
    {
        img: "../../images/krupnomery/el_serb.jpg",
        name: "Ель Сербская",
        dat: [{ razm: "2,5-3,0 м", cena: "11 970" }, { razm: "4,0-4,5м", cena: "29 870" },
              { razm: "4,5-5,0м", cena: "35 000" }]
    },
    {
        img: "../../images/krupnomery/pihta_koreana.jpg",
       name: "Пихта Конколор",
       dat: [{ razm: "4,0-5,0 м", cena: "39 750" }]
    },
    {
        img: "../../images/krupnomery/sosna_krym.jpg",
        name: "Сосна Черная",
        dat: [{ razm: "4,0-5,0 м", cena: "39 750" }]
    }
]


// Плодовые

var fruits =    // плодовые 
    [
      {
          img: "../../images/plodov/jablona.jpg",
          name: "Яблоня",
          dat: [{ razm: "8-10 лет", cena: "15 700" }]
      },
      {
          img: "../../images/plodov/grusha.jpg",
          name: "Груша",
          dat: [{ razm: "8-10 лет", cena: "15 700" }]
      }
      ,
      {
          img: "../../images/plodov/sliva.jpg",
          name: "Слива",
          dat: [{ razm: "8-10 лет", cena: "15 700" }]
      }
    ];




function crTable(elem)
{
    var srt;
    srt = "<table border=1px solid #000>";
    srt = srt + "<tr> <td '> Размер </td> <td style='background-color:#ffd800 '>  Цена </td> </tr>";

     $.each(elem.dat, function () {
         srt = srt + "<tr> <td >" + this.razm + "</td> <td style='background-color:#ffd800' >" + this.cena + " </td> </tr>";
     });

     srt = srt + "</table>";
    return srt;
}

function list1() {
    array = hardwood;
    $("div.temp1").append("<table class='tdr'>");

    for (i = 0; i < array.length ; i = i + 2) {

        var t1 = crTable(array[i]);
        var t2 = crTable(array[i + 1]);

        var str1 = "<div class = 'cat1'> " + array[i].name + " </div> <div> <img src = " + array[i].img + ">  </div> <div>" + t1 + "</div>";
        var str2 = "<div class = 'cat1'> " + array[i + 1].name + "</div> <div> <img src = " + array[i + 1].img + "> </div> <div>" + t2 + " </div>";

        $("table.tdr").append("<tr> <td valign='top' style = 'width:49%'> <div>" + str1 + "  </div> </td> <td <td valign='top' style= 'width:49%' > <div>" + str2 + "</div> </td></tr>");
    }
        

        $("div.temp1").append("</table>");
        

}

function list2()
         {    
    array = krupnomery;
    $("div.temp2").append("<table class='tdr1'>");

    for (i = 0; i < array.length ; i = i + 2) {

        var t1 = crTable(array[i]);
        var t2 = crTable(array[i + 1]);

        var str1 = "<div class = 'cat1'> " + array[i].name + " </div> <div> <img src = " + array[i].img + ">  </div> <div>" + t1 + "</div>";
        var str2 = "<div class = 'cat1'> " + array[i + 1].name + "</div> <div> <img src = " + array[i + 1].img + "> </div> <div>" + t2 + " </div>";

        $("table.tdr1").append("<tr> <td valign='top' style = 'width:49%'> <div>" + str1 + "  </div> </td> <td <td valign='top' style= 'width:49%' > <div>" + str2 + "</div> </td></tr>");
    }
    t = array.length;
    if ((t % 2) > 0) {
        var t1 = crTable(array[t - 1]);
        var str1 = "<div class = 'cat1'> " + array[t - 1].name + " </div> <div> <img src = " + array[t - 1].img + ">  </div> <div>" + t1 + "</div>";
        $("table.tdr1").append("<tr> <td valign='top' style = 'width:49%'> <div>" + str1 + "  </div> </td> <td <td valign='top' style= 'width:49%' > <div> </div> </td></tr>");
    }

    $("div.temp2").append("</table>");


 
}


function list3() {

    array = fruits;

    $("div.temp3").append("<table class='tdr2'>");
    
    for (i = 0; i < array.length ; i = i + 2) {

        var t1 = crTable(array[i]);
        var t2 = crTable(array[i + 1]);

        var str1 = "<div class = 'cat1'> " + array[i].name + " </div> <div> <img src = " + array[i].img + ">  </div> <div>" + t1 + "</div>";
        var str2 = "<div class = 'cat1'> " + array[i + 1].name + "</div> <div> <img src = " + array[i + 1].img + "> </div> <div>" + t2 + " </div>";

        $("table.tdr2").append("<tr> <td valign='top' style = 'width:49%'> <div>" + str1 + "  </div> </td> <td <td valign='top' style= 'width:49%' > <div>" + str2 + "</div> </td></tr>");
        t = array.length;
        if ((t % 2) > 0)
        {
            var t1 = crTable(array[t-1]);
            var str1 = "<div class = 'cat1'> " + array[t - 1].name + " </div> <div> <img src = " + array[t - 1].img + ">  </div> <div>" + t1 + "</div>";
           $("table.tdr2").append("<tr> <td valign='top' style = 'width:49%'> <div>" + str1 + "  </div> </td> <td <td valign='top' style= 'width:49%' > <div> </div> </td></tr>");
        }

    }

    $("div.temp3").append("</table>");
}


