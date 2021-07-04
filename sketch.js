var bg1
var player




function preload(){
bg1 = loadImage("mainbg1.png")
   
}




function setup() {
  createCanvas(1000,1000);

  wall1 = createSprite(300,965,800,5);
  wall1.visible = false
  wall2 = createSprite(505,40,900,5);
  wall2.visible = false
  wall3 = createSprite(950,500,5,912);
  wall3.visible = false
  wall4 = createSprite(905,500,5,800);
  wall4.visible = false
  wall5 = createSprite(790,500,5,790);
  wall5.visible = false
  wall6 = createSprite(450,100,775,5);
  wall6.visible  =false
  wall7 = createSprite(450,160,715,5);
  wall7.visible = false
  wall8 = createSprite(875,420,5,649);
  wall8.visible = false
  wall9 = createSprite(830,420,5,649);
  wall9.visible = false
  wall10 = createSprite(740,355,5,285);
  wall10.visible = false
  wall11 = createSprite(310,347,5,259);
  wall11.visible = false
  wall12 = createSprite(260,347,5,255);
  wall12.visible = false
  wall13 = createSprite(90,275,5,230);
  wall13.visible = false
  wall14 = createSprite(498,600,5,268);
  wall14.visible = false
  wall15 = createSprite(615,495,5,320);
  wall15.visible = false
  wall16 = createSprite(742,756,5,399);
  wall16.visible = false
  wall17 = createSprite(620,845,5,250);
  wall17.visible = false
  wall18 = createSprite(570,870,5,180);
  wall18.visible = false
  wall19 = createSprite(330,818,5,180);
  wall19.visible = false
  wall20 = createSprite(262,780,5,245);
  wall20.visible = false
  wall21 = createSprite(215,810,5,185);
  wall21.visible = false
  wall22 = createSprite(446,625,5,200);
  wall22.visible = false
  wall23 = createSprite(570,525,5,250);
  wall23.visible = false
  wall24 = createSprite(380,845,5,120);
  wall24.visible = false
  wall25 = createSprite(130,768,5,101);
  wall25.visible = false
  wall26 = createSprite(78,650,5,400);
  wall26.visible = false
  wall27 = createSprite(46,940,5,75);
  wall27.visible = false
  wall28 = createSprite(70,60,5,75);
  wall28.visible = false
  wall29 = createSprite(670,535,5,75);
  wall29.visible = false
  wall30 = createSprite(430,440,5,68);
  wall30.visible = false
  wall31 = createSprite(380,390,5,150);
  wall31.visible = false
  wall32 = createSprite(140,320,5,200);
  wall32.visible = false
  wall33 = createSprite(415,253,5,65);
  wall33.visible = false
  wall34 = createSprite(465,253,5,65);
  wall34.visible = false
  wall35 = createSprite(535,940,5,70);
  wall35.visible = false
  wall36 = createSprite(260,562,5,68);
  wall36.visible = false
  wall37 = createSprite(310,562,5,68);
  wall37.visible = false
  wall38 = createSprite(160,470,195,5);
  wall38.visible = false
  wall39 = createSprite(200,220,130,5);
  wall39.visible = false
  wall40 = createSprite(360,220,110,5);
  wall40.visible = false
  wall41 = createSprite(600,220,285,5);
  wall41.visible = false
  wall42 = createSprite(450,280,110,5);
  wall42.visible = false
  wall43 = createSprite(500,350,230,5);
  wall43.visible = false
  wall44 = createSprite(495,410,139,5);
  wall44.visible = false
  wall45 = createSprite(480,470,100,5);
  wall45.visible = false
  wall46 = createSprite(350,470,70,5);
  wall46.visible = false
  wall47 = createSprite(380,530,140,5);
  wall47.visible = false
  wall48 = createSprite(165,530,190,5);
  wall48.visible = false
  wall49 = createSprite(165,660,190,5);
  wall49.visible = false
  wall50 = createSprite(385,730,120,5);
  wall50.visible = false
  wall51 = createSprite(550,730,130,5);
  wall51.visible = false
  wall52 = createSprite(470,790,195,5);
  wall52.visible = false
  wall53 = createSprite(470,905,195,5);
  wall53.visible = false
  wall54 = createSprite(300,905,80,5);
  wall54.visible = false
  wall55 = createSprite(120,905,195,5);
  wall55.visible = false
  wall56 = createSprite(100,820,60,5);
  wall56.visible = false
  wall57 = createSprite(170,720,90,5);
  wall57.visible = false
  wall58 = createSprite(300,590,90,5);
  wall58.visible = false
  wall59 = createSprite(100,365,90,5);
  wall59.visible = false
  wall60 = createSprite(600,655,90,5);
  wall60.visible = false
  wall61 = createSprite(710,555,70,5);
  wall61.visible = false
  wall62 = createSprite(710,495,75,5);
  wall62.visible = false
  wall63 = createSprite(850,745,75,5);
  wall63.visible = false
  wall64 = createSprite(850,895,115,5);
  //wall64.visible = false
  wall65 = createSprite(850,955,205,5);
  //wall65.visible = false

chest1 = createSprite(100,800,10,10);
chest2 = createSprite(100,500,10,10);
chest3 = createSprite(110,350,10,10);
chest4 = createSprite(600,640,10,10);
chest5 = createSprite(850,730,10,10);
chest6 = createSprite(590,950,10,10);
chest7 = createSprite(520,940,10,10);
chest8 = createSprite(930,640,10,10);

tchest1 = createSprite(290,570,10,10)
tchest2 = createSprite(680,530,10,10)
tchest3 = createSprite(440,270,10,10)

obstical1 = createSprite(100,750,60,5)
obstical2 = createSprite(150,500,5,60)
obstical3 = createSprite(290,550,60,5)
obstical4 = createSprite(110,320,60,5)
obstical5 = createSprite(600,600,60,5)
obstical6 = createSprite(100,750,60,5)
obstical7 = createSprite(850,700,60,5)
obstical8 = createSprite(590,910,60,5)
obstical9 = createSprite(480,940,5,60)
obstical10 = createSprite(930,600,60,5)
obstical11 = createSprite(930,680,60,5)
obstical12 = createSprite(100,750,60,5)
obstical13 = createSprite(720,530,5,60)
obstical14 = createSprite(440,240,60,5)
obstical15 = createSprite(130,70,5,60)

npc1 = createSprite(110,730,10,10)
npc1.shapeColor = "red"
npc2 = createSprite(200,500,10,10)
npc2.shapeColor = "red"
npc3 = createSprite(110,250,10,10)
npc3.shapeColor = "red"
npc4 = createSprite(200,70,20,20)
npc4.shapeColor = "red"
npc5 = createSprite(590,580,10,10)
npc5.shapeColor = "red"
npc6 = createSprite(590,880,10,10)
npc6.shapeColor ="red"
npc7 = createSprite(850,650,10,10)
npc7.shapeColor = "red"
npc8 = createSprite(930,700,10,10)
npc8.shapeColor = "red"
npc9 = createSprite(930,580,10,10)
npc9.shapeColor = "red"
npc10 = createSprite(750,530,10,10)
npc10.shapeColor = "red"
npc11 = createSprite(290,530,10,10)
npc11.shapeColor = "red"
npc12 = createSprite(440,210,10,10)
npc12.shapeColor = "red"

coco1 = createSprite(850,950,10,10)
coco1.shapeColor = "brown"
coco1.velocityY = -2
coco2 = createSprite(870,950,10,10)
coco2.shapeColor = "brown"
coco2.velocityY = -3
coco3 = createSprite(830,950,10,10)
coco3.shapeColor = "brown"
coco3.velocityY = -4

exit1 = createSprite(80,70,10,10)



player = createSprite(80,935,10,10)
player.shapeColor = "blue"

obstaclegroup = new Group();

}

 


function draw() {
  background(bg1);  

  

  if(keyDown("RIGHT_Arrow")){
    player.x = player.x+2
    
  }

  if(keyDown("left_Arrow")){
    player.x = player.x-2
  }

  if(keyDown("up_Arrow")){
    player.y = player.y-2
  }

  if(keyDown("down_Arrow")){
    player.y = player.y+2
  }

  if(keyDown("d")){
    player.x = player.x+2
    
  }

  if(keyDown("a")){
    player.x = player.x-2
  }

  if(keyDown("w")){
    player.y = player.y-2
  }

  if(keyDown("s")){
    player.y = player.y+2
  }
  
  player.collide(wall1)
  player.collide(wall2)
  player.collide(wall3)
  player.collide(wall4)
  player.collide(wall5)
  player.collide(wall6)
  player.collide(wall7)
  player.collide(wall8)
  player.collide(wall9)
  player.collide(wall10)
  player.collide(wall11)
  player.collide(wall12)
  player.collide(wall13)
  player.collide(wall14)
  player.collide(wall15)
  player.collide(wall16)
  player.collide(wall17)
  player.collide(wall18)
  player.collide(wall19)
  player.collide(wall20)
  player.collide(wall21)
  player.collide(wall22)
  player.collide(wall23)
  player.collide(wall24)
  player.collide(wall25)
  player.collide(wall26)
  player.collide(wall27)
  player.collide(wall28)
  player.collide(wall29)
  player.collide(wall30)
  player.collide(wall31)
  player.collide(wall32) 
  player.collide(wall33)
  player.collide(wall34)
  player.collide(wall35)
  player.collide(wall36)
  player.collide(wall37)
  player.collide(wall38)                                           
  player.collide(wall39)
  player.collide(wall40)
  player.collide(wall41)
  player.collide(wall42)
  player.collide(wall43)
  player.collide(wall44)
  player.collide(wall45)
  player.collide(wall46)
  player.collide(wall47)
  player.collide(wall48)
  player.collide(wall49)
  player.collide(wall50)  
  player.collide(wall51)         
  player.collide(wall52)
  player.collide(wall53)
  player.collide(wall54)
  player.collide(wall55)
  player.collide(wall56)
  player.collide(wall57)  
  player.collide(wall58) 
  player.collide(wall59) 
  player.collide(wall60) 
  player.collide(wall61) 
  player.collide(wall62) 
  player.collide(wall63) 
  player.collide(wall64)
  player.collide(wall65)
  player.collide(obstical1);
  player.collide(obstical2)
  player.collide(obstical3)
  player.collide(obstical4)
  player.collide(obstical5)
  player.collide(obstical6)
  player.collide(obstical7)
  player.collide(obstical8)
  player.collide(obstical9)
  player.collide(obstical10)
  player.collide(obstical11)
  player.collide(obstical12)
  player.collide(obstical13)
  player.collide(obstical14)
  player.collide(obstical15)
 
  

  
  ///camera.position.x = player.x
  //camera.position.y = player.y
  drawSprites();
 

}
