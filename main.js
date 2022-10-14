var array=[]
function createP(name,id,price){
   var pc={};
   pc.name=name;
   pc.id=id
   pc.price=price 
   array.push(pc)
   return array 
}
createP("dell gaming 15",$("#1"),2300)
createP("lenovo legion 3",$("#2"),1300)
createP("HP gaming",$("#3"),1899)
createP("asus a15 tuf507",$("#4"),2489)
createP("asus tuf fx516s",$("#5"),2130)
createP("HP lap victus 15",$("#6"),1999)
createP("lenovo thinkpad e14",$("#7"),1432)
createP("dell M 15",$("#8"),1432)
createP("Alnort AK47 18K",$("#9"),9120)
createP("3EFRIT Tower Ultime",$("#10"),12300)
createP("halland I40 flow 1.10",$("#11"),5890)
createP("striker V8 IE01 Engine",$("#12"),2489)
createP("alienware aurora 13",$("#13"),3130)
createP("Gamer clone IE full",$("#14"),7999)
createP("Zest heisenberg HOT",$("#15"),4432)
createP("gaming flavio 2040",$("#16"),8432)
createP("gamer xpert g900",$("#17"),70)
createP("gaming usb razer deathhadder v2",$("#18"),100)
createP("mecanic manette ps4",$("#19"),465)
createP("razer razer blackwidow v3",$("#20"),425)
createP("casque gaming redragon zeus",$("#21"),169)
createP("chair gaming MSI MAG ch120",$("#22"),1119)
createP("spirit race wheel pro 2",$("#23"),279)
createP("master MP860 RGB / 360x260",$("#24"),322)


//---------filtring-the-data--//----------------
var data=[]
$("input").change(search)
   function search(){
   var myInput = $("input").val().toString();
   myInput = myInput.toLowerCase()
   console.log(myInput)
   $(".box").hide()
    for (var i=0;i<array.length;i++){
         if(array[i].name.includes(myInput)===true){

        array[i].id.show()
         }
    } 
   }
$("#100").hide()
 $("#butt1").click(function(){
   console.log("hello");
   $("#prixx").text(($("#prixx").text()*1)+1)
   $("#totalee").text(($("#totalee").text()*1)+2300)
     $("#100").show() 
   })

   $("#200").hide()
   $("#hahi").click(function(){
      console.log("hey");
      $("#prixx").text(($("#prixx").text()*1)+1)
      $("#totalee").text(($("#totalee").text()*1)+1300)
       $("#200").show() 
     })
  
     $("#300").hide()
     $("#hoy").click(function(){
      console.log("hello");
      $("#prixx").text(($("#prixx").text()*1)+1)
      $("#totalee").text(($("#totalee").text()*1)+1899)
      $("#300").show()
     })

     $("#400").hide()
     $("#hemm").click(function(){
      console.log("hello");
      $("#prixx").text(($("#prixx").text()*1)+2489)
      $("#400").show()
     })
     $("#500").hide()
     $("#hell").click(function(){
      console.log("hello");
      $("#prixx").text(($("#prixx").text()*1)+1)
      $("#totalee").text(($("#totalee").text()*1)+2130)
      $("#500").show()
     })
     $("#600").hide()
     $("#hobi").click(function(){
      console.log("hello");
      $("#prixx").text(($("#prixx").text()*1)+1)
      $("#totalee").text(($("#totalee").text()*1)+1999)
      $("#600").show()
     })
     $("#700").hide()
     $("#harr").click(function(){
      console.log("hello");
      $("#prixx").text(($("#prixx").text()*1)+1)
      $("#totalee").text(($("#totalee").text()*1)+1432)
      $("#700").show()
     })
     $("#800").hide()
     $("#han").click(function(){
      console.log("hello");
      $("#prixx").text(($("#prixx").text()*1)+1)
      $("#totalee").text(($("#totalee").text()*1)+1432)
      $("#800").show()
     })
     $("#900").hide()
     $("#hard").click(function(){
      console.log("hello");
      $("#prixx").text(($("#prixx").text()*1)+1)
      $("#totalee").text(($("#totalee").text()*1)+9120)
      $("#900").show()
     })
     $("#1000").hide()
     $("#hareey").click(function(){
      console.log("hello");
      $("#prixx").text(($("#prixx").text()*1)+1)
      $("#totalee").text(($("#totalee").text()*1)+12300)
      $("#1000").show()
     })
     $("#1100").hide()
     $("#rony").click(function(){
      console.log("hello");
      $("#prixx").text(($("#prixx").text()*1)+1)
      $("#totalee").text(($("#totalee").text()*1)+5890)
      $("#1100").show()
     })
     $("#1200").hide()
     $("#alno").click(function(){
      console.log("hello");
      $("#prixx").text(($("#prixx").text()*1)+1)
      $("#totalee").text(($("#totalee").text()*1)+2489)
      $("#1200").show()
     })
     $("#1300").hide()
     $("#chando").click(function(){
      console.log("hello");
      $("#prixx").text(($("#prixx").text()*1)+1)
      $("#totalee").text(($("#totalee").text()*1)+3130)
      $("#1300").show()
     })
     $("#1400").hide()
     $("#butt14").click(function(){
      console.log("hello");
      $("#prixx").text(($("#prixx").text()*1)+1)
      $("#totalee").text(($("#totalee").text()*1)+7999)
      $("#1400").show()
     })
     $("#1500").hide()
     $("#butt15").click(function(){
      console.log("hello");
      $("#prixx").text(($("#prixx").text()*1)+1)
      $("#totalee").text(($("#totalee").text()*1)+4432)
      $("#1500").show()
     })
     $("#1600").hide()
     $("#butt16").click(function(){
      console.log("hello");
      $("#prixx").text(($("#prixx").text()*1)+1)
      $("#totalee").text(($("#totalee").text()*1)+8432)
      $("#1600").show()
     })
     $("#1700").hide()
     $("#butt17").click(function(){
      console.log("hello");
      $("#prixx").text(($("#prixx").text()*1)+1)
      $("#totalee").text(($("#totalee").text()*1)+70)
      $("#1700").show()
     })
     $("#1800").hide()
     $("#butt18").click(function(){
      console.log("hello");
      $("#prixx").text(($("#prixx").text()*1)+1)
      $("#totalee").text(($("#totalee").text()*1)+100)
      $("#1800").show()
     })
     $("#1900").hide()
     $("#butt19").click(function(){
      console.log("hello");
      $("#prixx").text(($("#prixx").text()*1)+1)
      $("#totalee").text(($("#totalee").text()*1)+465)
      $("#1900").show()
     })
     $("#2000").hide()
     $("#butt20").click(function(){
      console.log("hello");
      $("#prixx").text(($("#prixx").text()*1)+1)
      $("#totalee").text(($("#totalee").text()*1)+425)
      $("#2000").show()
     })
     $("#2100").hide()
     $("#butt21").click(function(){
      console.log("hello");
      $("#prixx").text(($("#prixx").text()*1)+1)
      $("#totalee").text(($("#totalee").text()*1)+169)
      $("#2100").show()
     })
     $("#2200").hide()
     $("#butt22").click(function(){
      console.log("hello");
      $("#prixx").text(($("#prixx").text()*1)+1)
      $("#totalee").text(($("#totalee").text()*1)+1119)
      $("#2200").show()
     })
     $("#2300").hide()
     $("#butt23").click(function(){
      console.log("hello");
      $("#prixx").text(($("#prixx").text()*1)+1)
      $("#totalee").text(($("#totalee").text()*1)+279)
      $("#2300").show()
     })
     $("#2400").hide()
     $("#butt24").click(function(){
      console.log("hello");
      $("#prixx").text(($("#prixx").text()*1)+1)
      $("#totalee").text(($("#totalee").text()*1)+322)
      $("#2400").show()
     })

     $("#1994").change(discount)
     function discount(){
      var myInput = $("#1994").val()
      if(myInput==="azizaziz"){
         $("#totalee").text()=($("#totalee").text()*1)*0.2
      }

     }
     $("#1997").click(function(){
      window.alert("purchase completed successfully")
      $("#totalee").text("0")
      $("#clean").empty()
      $("#prixx").text("0")

    })
   //  <!--remove  to buy section  -->

    function remove(){
      $("#100").hide()
      $("#prixx").text(($("#prixx").text()*1)-1)
      $("#totalee").text(($("#totalee").text()*1)-2300)
    }
    function remove1(){
      $("#200").hide()
      $("#prixx").text(($("#prixx").text()*1)-1)
      $("#totalee").text(($("#totalee").text()*1)-1300)
    }
    function remove2(){
      $("#300").hide()
      $("#prixx").text(($("#prixx").text()*1)-1)
      $("#totalee").text(($("#totalee").text()*1)-1899)
    }
    function remove3(){
      $("#400").hide()
      $("#prixx").text(($("#prixx").text()*1)-1)
      $("#totalee").text(($("#totalee").text()*1)-2489)
    }
    function remove4(){
      $("#500").hide()
      $("#prixx").text(($("#prixx").text()*1)-1)
      $("#totalee").text(($("#totalee").text()*1)-2130)
    }
    function remove5(){
      $("#600").hide()
      $("#prixx").text(($("#prixx").text()*1)-1)
      $("#totalee").text(($("#totalee").text()*1)-1999)
    }
    function remove6(){
      $("#700").hide()
      $("#prixx").text(($("#prixx").text()*1)-1)
      $("#totalee").text(($("#totalee").text()*1)-1432)
    }
    function remove7(){
      $("#800").hide()
      $("#prixx").text(($("#prixx").text()*1)-1)
      $("#totalee").text(($("#totalee").text()*1)-1432)
    }
    //remove pc tower from to buy section ///
    function remove8(){
      $("#900").hide()
      $("#prixx").text(($("#prixx").text()*1)-1)
      $("#totalee").text(($("#totalee").text()*1)-9120)
    }
    function remove9(){
      $("#1000").hide()
      $("#prixx").text(($("#prixx").text()*1)-1)
      $("#totalee").text(($("#totalee").text()*1)-12300)
    }
    function remove10(){
      $("#1100").hide()
      $("#prixx").text(($("#prixx").text()*1)-1)
      $("#totalee").text(($("#totalee").text()*1)-5890)
    }
    function remove11(){
      $("#1200").hide()
      $("#prixx").text(($("#prixx").text()*1)-1)
      $("#totalee").text(($("#totalee").text()*1)-2489)
    }
    function remove12(){
      $("#1300").hide()
      $("#prixx").text(($("#prixx").text()*1)-1)
      $("#totalee").text(($("#totalee").text()*1)-3130)
    }
    function remove13(){
      $("#1400").hide()
      $("#prixx").text(($("#prixx").text()*1)-1)
      $("#totalee").text(($("#totalee").text()*1)-7999)
    }
    function remove14(){
      $("#1500").hide()
      $("#prixx").text(($("#prixx").text()*1)-1)
      $("#totalee").text(($("#totalee").text()*1)-4432)
    }
    function remove15(){
      $("#1600").hide()
      $("#prixx").text(($("#prixx").text()*1)-1)
      $("#totalee").text(($("#totalee").text()*1)-8432)
    }
    //remove accesoires from to buy section ///
    function remove16(){
      $("#1700").hide()
      $("#prixx").text(($("#prixx").text()*1)-1)
      $("#totalee").text(($("#totalee").text()*1)-70)
    }
    function remove17(){
      $("#1800").hide()
      $("#prixx").text(($("#prixx").text()*1)-1)
      $("#totalee").text(($("#totalee").text()*1)-100)
    }
    function remove18(){
      $("#1900").hide()
      $("#prixx").text(($("#prixx").text()*1)-1)
      $("#totalee").text(($("#totalee").text()*1)-465)
    }
    function remove19(){
      $("#2000").hide()
      $("#prixx").text(($("#prixx").text()*1)-1)
      $("#totalee").text(($("#totalee").text()*1)-425)
    }
    function remove20(){
      $("#2100").hide()
      $("#prixx").text(($("#prixx").text()*1)-1)
      $("#totalee").text(($("#totalee").text()*1)-169)
    }
    function remove21(){
      $("#2200").hide()
      $("#prixx").text(($("#prixx").text()*1)-1)
      $("#totalee").text(($("#totalee").text()*1)-1119)
    }
    function remove22(){
      $("#2300").hide()
      $("#prixx").text(($("#prixx").text()*1)-1)
      $("#totalee").text(($("#totalee").text()*1)-279)
    }
    function remove23(){
      $("#2400").hide()
      $("#prixx").text(($("#prixx").text()*1)-1)
      $("#totalee").text(($("#totalee").text()*1)-322)
    }