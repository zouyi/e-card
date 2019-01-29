var dispDiv = document.getElementById("display");
var bg = document.getElementById("bg");
var downward = document.getElementById("downward");
var leftward = document.getElementById("leftward");
var rightward = document.getElementById("rightward");
var timer = null;
var desc = document.getElementById("description");
var screenIndex = 0;


//initialize buttons

initialize = function(){
  
  leftward.style.display = "none";
  rightward.style.display = "none";
  
  downward.addEventListener("click", function(){
    console.log("downward pressed");
    bg.style.transition = "background-position 6s";
    bg.style.backgroundPosition = "50% 100%";
      var lanterns = document.getElementsByClassName("lanterns");
      var length = lanterns.length;
      for (var i=0; i<length; i++){
        lanterns[i].style.top="-100%";
      }
    
      var moon = document.getElementById("moon");
      moon.style.top="-100%";
      moon.style.transition="top 6s";
    setTimeout(function(){screen2();},6000);

  });
  
  rightward.addEventListener("click", function(){
    console.log("rightward pressed");
   // bg.style.transition = "background-position 6s";
    yuanzibowl.style.display = "none";
    firework.style.display = "none";
      rightward.style.display="none";

    bg.style.transition = "background-position 6s";
    bg.style.backgroundPosition = "50% 100%";
    
    setTimeout(function(){
      screen2();},6000);

  });

  
    leftward.addEventListener("click", function(){
    console.log("leftward pressed");
   // bg.style.transition = "background-position 6s";

    screen3();

  });
  
  
    var yuanzibowl = document.createElement("img");
    yuanzibowl.src="resources/SVG/yuanzibowl.svg";
    yuanzibowl.id="yuanzibowl";
    yuanzibowl.style.position="absolute";
    yuanzibowl.style.left="245px";
    yuanzibowl.style.top="325px";
    yuanzibowl.style.width="9%";
    yuanzibowl.style.height="9%";
    yuanzibowl.style.cursor="pointer";
    yuanzibowl.setAttribute("onclick", "fact('yuanzibowl')");
    dispDiv.appendChild(yuanzibowl);
  yuanzibowl.style.display = "none";
  
  //generate firework
    var firework = document.createElement("img");
    firework.src="resources/SVG/firework.svg";
    firework.id="firework";
    firework.style.position="absolute";
    firework.style.left="480px";
    firework.style.top="350px";
    firework.style.width="9%";
    firework.style.height="10%";
    firework.style.cursor="pointer";
    firework.setAttribute("onclick", "fact('baozhu')");
    dispDiv.appendChild(firework);
    firework.style.display = "none";
  
  
    //creating grandma
  var sdim = 30;
   var grandma = document.createElement("img");
    grandma.src="resources/SVG/grandma.svg";
    grandma.id="grandma";
    grandma.style.position="absolute";
    grandma.style.left="10%";
    grandma.style.top="50%";
    grandma.style.width=sdim+"%";
    grandma.style.height=sdim+"%";
    grandma.style.cursor="pointer";
   
   grandma.style.opacity="0%";
  dispDiv.appendChild(grandma);

    grandma.style.transition="opacity 10s";
      grandma.style.opacity="100%";
  
    grandma.setAttribute("onclick", "grandmaJump()");
    grandma.style.display = "none";

  
  var boy = document.createElement("img");
    boy.src="resources/SVG/boy.svg";
    boy.id="boy";
    boy.style.position="absolute";
    boy.style.left="45%";
    boy.style.top="60%";
    boy.style.width="20%";
    boy.style.height="20%";
   
    boy.style.cursor="pointer";
  dispDiv.appendChild(boy);
    boy.setAttribute("onclick", "boyWalking()");
  
      boy.style.display = "none";


    var bunny = document.createElement("img");
    bunny.src="resources/SVG/bunnylight.svg";
    bunny.id="bunny";
    bunny.style.position="absolute";
    bunny.style.left="35%";
    bunny.style.top="60%";
    bunny.style.width="20%";
    bunny.style.height="20%";
    bunny.style.cursor="pointer";
    bunny.setAttribute("onclick", "fact('bunny')");
    dispDiv.appendChild(bunny);
      
    bunny.style.display = "none";

    
    var redroundlantern = document.createElement("img");
    redroundlantern.src="resources/SVG/redlantern.svg";
    redroundlantern.id="redroundlantern";
    redroundlantern.className="swinglantern";
    redroundlantern.style.position="absolute";
    redroundlantern.style.left="465px";
    redroundlantern.style.top="158px";
    redroundlantern.style.width="100px";
    redroundlantern.style.height="16%";
    redroundlantern.style.cursor="pointer";
    redroundlantern.setAttribute("onclick", "fact('redlantern')");
    dispDiv.appendChild(redroundlantern);
  
      redroundlantern.style.display = "none";


var bluelantern = document.createElement("img");
    bluelantern.src="resources/SVG/bluelantern.svg";
    bluelantern.id="bluelantern";
    bluelantern.className="swinglantern";
    bluelantern.style.position="absolute";
    bluelantern.style.left="400px";
    bluelantern.style.top="165px";
    bluelantern.style.width="100px";
    bluelantern.style.height="15%";
    bluelantern.style.cursor="pointer";
    bluelantern.setAttribute("onclick", "fact('bluelantern')");
    dispDiv.appendChild(bluelantern);
  
      bluelantern.style.display = "none";

  
    
    var redrectlantern = document.createElement("img");
    redrectlantern.src="resources/SVG/redrectlantern.svg";
    redrectlantern.id="redrectlantern";
    redrectlantern.className="swinglantern";
    redrectlantern.style.position="absolute";
    redrectlantern.style.left="320px";
    redrectlantern.style.top="158px";
    redrectlantern.style.width="140px";
    redrectlantern.style.height="15%";
    redrectlantern.style.cursor="pointer";
    redrectlantern.setAttribute("onclick", "fact('redrectlantern')");
    dispDiv.appendChild(redrectlantern);
  
        redrectlantern.style.display = "none";

    
    
     var greenlantern = document.createElement("img");
    greenlantern.src="resources/SVG/greenroundlantern.svg";
    greenlantern.id="greenlantern";
    greenlantern.className="swinglantern";
    greenlantern.style.position="absolute";
    greenlantern.style.left="240px";
    greenlantern.style.top="157px";
    greenlantern.style.width="100px";
    greenlantern.style.height="16%";
    greenlantern.style.cursor="pointer";
    greenlantern.setAttribute("onclick", "fact('greenlantern')");
    dispDiv.appendChild(greenlantern);
  
          greenlantern.style.display = "none";


    
var purplelantern = document.createElement("img");
    purplelantern.src="resources/SVG/purplerectlantern.svg";
    purplelantern.id="purplelantern";
    purplelantern.className="swinglantern";
    purplelantern.style.position="absolute";
    purplelantern.style.left="180px";
    purplelantern.style.top="167px";
    purplelantern.style.width="100px";
    purplelantern.style.height="15%";
    purplelantern.style.cursor="pointer";
    purplelantern.setAttribute("onclick", "fact('purplelantern')");
    dispDiv.appendChild(purplelantern);
  
            purplelantern.style.display = "none";


    
    var yellowlantern = document.createElement("img");
    yellowlantern.src="resources/SVG/yellowlantern.svg";
    yellowlantern.id="yellowlantern";
    yellowlantern.className="swinglantern";
    yellowlantern.style.position="absolute";
    yellowlantern.style.left="120px";
    yellowlantern.style.top="155px";
    yellowlantern.style.width="100px";
    yellowlantern.style.height="15%";
    yellowlantern.style.cursor="pointer";
    yellowlantern.setAttribute("onclick", "fact('yellowlantern')");
    dispDiv.appendChild(yellowlantern);
  
             yellowlantern.style.display = "none";

        
    //Create leftward button

  
  
}







function scroll(){
  
  
    console.log("clicked");
         $(".l-pic-index").animate({'left':'95px','top':'-4px'},1300);
    $(".r-pic-index").animate({'right':'-23px','top':'-5px'},1450);
    $(".l-bg-index").animate({'width':'433px','left':'73px'},1500);
    $(".r-bg-index").animate({'width':'433px','right':'-38px'},1500,function(){
        $(".main-index").fadeIn(800);
    });
  
 
}


speak = function(){
  
  console.log("grandma speaked");
  
   var speakBubble = document.createElement("div");
    
    speakBubble.id="speak";
    speakBubble.style.position="absolute";
    speakBubble.className = "speech-bubble";
    speakBubble.style.left="10%";
    speakBubble.style.top="50%";
    speakBubble.style.cursor="pointer";
  
    speakBubble.addEventListener("click", function(){
      this.style.display="none";
      
    });
   
  dispDiv.appendChild(speakBubble);
  
}

fact = function(choice){
  
  var speech;

  console.log(choice);
  if(choice=="grandma"){
    
    speech = "Grandma: Another variation of the lantern festival is torch festival. Ancient chinese farmers used torch in the farm to chase away bugs and animals to reduce the harm, hoping for a rich future harvest.";
  
  } else if(choice=="boy"){
    
        speech = "Boy: ";
    
  } else if(choice=="bunny"){
    
        speech = "Bunny Lantern Light: a bunny shaped lantern made with paper is popular amongst many children during lantern festival.";
  
  } else if(choice=="yellowlantern") {
      
      speech = "In the Han Dynasty, Dongfang Shuo was a favorite adviser of the emperor. One winter day, he went to the garden and heard a little girl crying and getting ready to jump into a well to commit suicide. Shuo stopped her and asked why. She said she was Yuan-Xiao, a maid in the emperor's palace and that she never had a chance to see her family since she started working there. If she could not have the chance to show her filial piety in this life, she would rather die. Shuo promised to find a way to reunite her with her family. Shuo left the palace and set up a fortune-telling stall on the street. Due to his reputation, many people asked for their fortunes to be told but everyone got the same prediction - a calamitous fire on the fifteenth lunar day. The rumor spread quickly.";
      
  } else if(choice=="purplelantern") {
      
      speech = "The lion dance: derived from the Three Kingdoms Period (220-280), the lion dance is an excellent traditional art that adds infinite fun to any celebration including the Lantern Festival. Two performing types have formed during its long development. In north China, the lion dance focuses on skills, and in the south the lion dance pays more attention to the animal resemblance. One actor manipulates a small lion made of quilts resembling a real one, and with two persons acting like a big lion, one manages the head part and the other, the rest. Under the guidance of a director, the lions sometimes jump, leap, and do difficult acts such as walking on stilts.";
      
  } else if(choice=="greenlantern") {
      
      speech = 'Riddles written on lantern "Guessing lantern riddles" is an essential part of the Festival.Lantern owners write riddles on a piece of paper and post them on the lanterns. If visitors have solutions to the riddles, they can pull the paper out and go to the lantern owners to check their answer.';
  
  } else if(choice=="redrectlantern") {
      
      speech = "In Hong Kong and Taiwan, it is commercialized as the Chinese equivalent of Valentine's Day. Young people were chaperoned in the streets in hopes of finding love. Matchmakers acted busily in hopes of pairing couples. The brightest lanterns were symbolic of good luck and hope.";
      
      
  }else if(choice=="bluelantern") {
      
      speech = 'In ancient times, the lanterns were fairly simple, and only the emperor and noblemen had large ornate ones. In modern times, lanterns have been embellished with many complex designs. For example, lanterns are now often made in the shape of animals. The lanterns can symbolize the people letting go of their past selves and getting new ones, which they will let go of the next year.';
      
  } else if(choice=="redlantern") {
      
      speech = 'Another variation of the lantern festival is torch festival. Ancient chinese farmers used torch in the farm to chase away bugs and animals to reduce the harm, hoping for a rich future harvest.';
      
  } else if(choice=="yuanzibowl") {
    speech = "The trademark food of the Lantern Festival is called Yuan Xiao, just like the festival itself. It's also known as tang yuan in the South, and one of the many tasty Chinese New Year desserts. They are glutinous rice dumplings with sweet fillings made of syrup, red bean paste, black sesame paste or more. They can be steamed or fried, but usually boiled and served in hot water.They represent family reunions because tang yuan sounds similar to 'reunion' (tuan yuan). Some businessmen also call these balls (yuan bao), meaning gold or silver ingots.";
  }else if(choice=="baozhu") {
    speech = "Despite being a night of revelry, the Lantern Festival is also a night for families. Before Chinese New Year finally ends, the family should reunite again. Take a break from the celebrations and relax with your family. Reconnect under the moon. Enjoy firework shows and performances while eating a bowl of yuan xiao.";
    fireup();
  }
  
   document.getElementById("description").innerHTML = speech; 
 
   
  
}


screen2 = function(){
    screenIndex = 1;

  //move lanterns to top
      rightward.style.display="none";

              grandma.style.display = "inline";
            boy.style.display = "inline";
            bunny.style.display = "inline";
            redroundlantern.style.display = "inline";
            redrectlantern.style.display = "inline";
            greenlantern.style.display = "inline";
            yellowlantern.style.display = "inline";
            bluelantern.style.display = "inline";
            purplelantern.style.display = "inline";

  
    
    downward.style.display="none";
  
    leftward.style.display = "inline";


}


eraseScreen2Items = function() {
  grandma.style.display = "none";
            boy.style.display = "none";
            bunny.style.display = "none";
            redroundlantern.style.display = "none";
            redrectlantern.style.display = "none";
            greenlantern.style.display = "none";
            yellowlantern.style.display = "none";
            bluelantern.style.display = "none";
            purplelantern.style.display = "none";
  
}



screen3 = function() {
  
    screenIndex = 2;
    if(screenIndex == 2){
          leftward.style.display="none";
    }
  
    
    console.log("clicked3");
    bg.style.backgroundPosition = "0% 100%";
    document.getElementById("grandma").style.display="none";
    document.getElementById("boy").style.display="none";
    document.getElementById("bunny").style.display="none";

    var lanterns= document.getElementsByClassName("swinglantern");
    var length = lanterns.length;
  //console.log("length"+length);


    document.getElementById("yellowlantern").style.display="none";
    document.getElementById("redrectlantern").style.display="none";
    document.getElementById("redroundlantern").style.display="none";
    document.getElementById("purplelantern").style.display="none";
    document.getElementById("greenlantern").style.display="none";
    document.getElementById("bluelantern").style.display="none";
    
    //generate yuanzi bowl
    leftward.style.display="none";
  setTimeout(function(){
    
    yuanzibowl.style.display = "inline";
      firework.style.display = "inline";
        rightward.style.display="inline";


  },6000);
}

function boyWalking(){
  
  boy.style.left = "70%";  
  boy.style.transition = "left 3s";
  
    bunny.style.left = "60%";  
    bunny.style.transition = "left 3s";


    
  
    
  
}

function grandmaJump(){
  grandma.style.transition = "top 1s";
  
    grandma.style.top = "46%";  
  
    setTimeout(function(){
        grandma.style.top = "50%";  

      
    },1000);




  
}


function fireup(){
  console.log("fired");
    var firework = document.createElement("img");
    firework.src="resources/gif/firework.gif";
    firework.style.position="absolute";
    firework.style.left="400px";
    firework.style.top="20px";
    firework.style.width="26%";
    firework.style.height="30%";
    firework.style.cursor="pointer";
    dispDiv.appendChild(firework);
  setTimeout(function(){firework.remove();},3000);
    //firework.remove();
  
}

function slanternRising(mleft,top){
    
    var lantern = document.createElement("div");
    //var mleft = Math.round(Math.random()*90);
  
    
    /*smallest lantern dimension*/
    var sdim = 5;
  

    console.log("rantop is: "+top);


    var lantern = document.createElement("img");
    lantern.src="resources/SVG/lantern.svg";
  
    lantern.className = "lanterns";
    lantern.style.left=mleft+"%";
    lantern.style.width=sdim+"%";
    lantern.style.height=sdim+"%";
    lantern.style.opacity="70%";
 

    
  dispDiv.appendChild(lantern);

    setTimeout(function(){
    
    lantern.style.top = top+'%';
    
  },1000);
   
}

function mlanternRising(mleft, randomTop){
    
    var lantern = document.createElement("div");
  
    /*medium lantern dimension*/
    var sdim = 7;

      //console.log(randomTop);
          //console.log("rantop is: "+randomTop);
    var lantern = document.createElement("img");
    lantern.src="resources/SVG/lantern.svg";
    lantern.className = "lanterns";
    lantern.style.left=mleft+"%";
    lantern.style.width=sdim+"%";
    lantern.style.height=sdim+"%";
    lantern.style.opacity="70%";
  
    dispDiv.appendChild(lantern);

    setTimeout(function(){
    
    lantern.style.top = randomTop+'%';
    
  },700);
   
}

function clanternRising(){
    
  //this function generate a clickable lantern
    var lantern = document.createElement("div");
    var mleft = 20;
    
    /*medium lantern dimension*/
    var sdim = 30;

    var lantern = document.createElement("img");
    lantern.src="resources/SVG/lantern.svg";
    lantern.className = "lanterns";
    lantern.id="lanternClick";
    lantern.style.top="100%";
    lantern.style.left=mleft+"%";
    lantern.style.width="102px";
    lantern.style.height="120px";
    lantern.style.opacity="70%";
    lantern.style.cursor = "pointer";
    lantern.style.transition = "top 6s";
     
    dispDiv.appendChild(lantern);
  
   lantern.addEventListener("click", function(){
         var desc = document.getElementById("description");

        desc.innerHTML="During the Han Dynasty (206 BC - 220 AD), Buddhism flourished in China. So in order to popularize Buddhism, one of the emperors gave an order to light lanterns in the imperial palace to worship and show respect for Buddha on the 15th day of the first lunar month. During the Tang (618 - 907), Song (960 - 1279), Ming (1368 - 1644) and Qing (1644 - 1911) dynasties, lighting lanterns became a tradition for Chinese people.";
    });

    setTimeout(function(){
    
    lantern.style.top = '30%';
    
  },400);
  
  
    
    

  
}

function generateMoon (){
  //this function generate a clickable lantern

    var mleft = 70;
    
    /*medium lantern dimension*/
    var sdim = 30;
    
    var moon = document.createElement("img");
    moon.src="resources/SVG/moon.png";
    moon.id="moon";
    moon.style.position="absolute";
    moon.style.top="20%";
    moon.style.left=mleft+"%";
    moon.style.width="150px";
    moon.style.height="150px";
    moon.style.cursor = "pointer";
    moon.style.opacity = "0";
    moon.style.transition = "opacity 6s";

   dispDiv.appendChild(moon);
  
   moon.addEventListener("click", function(){
         var desc = document.getElementById("description");

        desc.innerHTML="Lantern festival is the first day of year with the full moon.";
    });

    setTimeout(function(){
    
    moon.style.opacity = '1';
    
  },1000);
  
  
}


screen1 = function(){
  
  
    var leftArr = [8, 34, 43, 15, 40, 83, 46, 52, 20, 88];
    var topArr =  [41,47, 17, 25, 26, 50, 40, 18, 43, 20];
  
    for(var i=0; i<10; i++){
      slanternRising(leftArr[i], topArr[i]);
    }
  
  
    var leftArr1 = [10,15,47,50,57];
    var topArr1 =  [60,66,58,52,39];
  
     for(var i=0; i<5; i++){
      mlanternRising(leftArr1[i], topArr1[i]);
    }


  clanternRising();
  generateMoon();
  openScroll();
  /*
  var lanterns = document.getElementsByClassName("lanterns");
  var llength = lanterns.length;
  for (var i = 0; i<length; i++){
    lanterns[i].sytle.display
  }*/

  
}
screen1();


initialize();

//screen2();

