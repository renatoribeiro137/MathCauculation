let msc
var back
var astro
var sergio
var rumme
var renato
var youwin
var gameover
var tela=1
var xr,yr
var xr2,yr2
var xr3,yr3
var xr4,yr4
var xr5,yr5
var xr6,yr6
var xe1,ye1;
var xe2,ye2;
var xe3,ye3;
var xe4,ye4;
var xe5,ye5;
var xe6,ye6;
var xe7,xe7;
var xe8,ye8;
var xe8,ye9;
var xe9,ye10;
var xe10,ye11;
var xe11,ye12;
var xe12,ye13;

function preload(){
  soundFormats('mp3')
  msc=loadSound("happy.mp3")
}

function setup() {
  msc.play();
  createCanvas(600, 400);
  back=loadImage('back.png')
  astro=loadImage('Astronaut.png')
  youwin=loadImage('win.jpg')
  gameover=loadImage('gameover.jpeg')
  sergio=loadImage('sergio.jpg')
  renato=loadImage('renato.jpg')
  rumme=loadImage('rumme.jpg')
  xr=random(20,580)
  xr2=random(20,580)
  xr3=random(20,580)
  xr4=random(20,580)
  xr5=random(20,580)
  xr6=random(20,580)
  yr=random(80,380)
  yr2=random(80,380)
  yr3=random(80,380)
  yr4=random(80,380)
  yr5=random(80,380)
  yr6=random(80,380)
  xe1=random(20,580)
  xe2=random(20,580)
  xe3=random(20,580)
  xe4=random(20,580)
  xe5=random(20,580)
  xe6=random(20,580)
  xe7=random(20,580)
  xe8=random(20,580)
  xe9=random(20,580)
  xe10=random(20,580)
  xe11=random(20,580)
  xe12=random(20,580)
  ye1=random(100,380)
  ye2=random(100,380)
  ye3=random(100,380)
  ye4=random(100,380)
  ye5=random(100,380)
  ye6=random(100,380)
  ye7=random(100,380)
  ye8=random(100,380)
  ye9=random(100,380)
  ye10=random(100,380)
  ye11=random(100,380)
  ye12=random(100,380)

}


function draw() {
  //menu do jogo(tela1)
  if(tela==1){
  tela1();
  }
  //Jogar(tela2)
  if(tela==2){
    tela2()
  }
  //instruções
  if(tela==3){
    tela3()
  }
  //Créditos
  if(tela==4){
    tela4()
  }
  //win
  if(tela==5){
    tela5()
  }
  //gameover
  if(tela==6){
    tela6()
  }
  //fase 2
  if(tela==7){
    tela7()
  }
  //fase3
  if(tela==8){
    tela8()
  }
  //fase4
  if(tela==9){
    tela9()
  }
  //fase5
  if(tela==10){
    tela10()
  }
  //fase6
  if(tela==11){
    tela11()
  }
}


 
 
  