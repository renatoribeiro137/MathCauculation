function tela8(){
  background(back,0,0);
 
 
  
  //nome da tela
  textSize(50)
  textAlign(CENTER)
  fill("white")
  text("Space Calculation",300,45)
  
   //fase
  textSize(30)
  fill('white')
  text("fase 3",45,390)
  
  //Botão de voltar
  rect(5,5,55,25);
  textSize(19)
  fill("black")
  text("Voltar",33,25)
  
  //pergunta
  fill('white')
  textSize(40)
  text('16+16=?',70,90)
  
  //asteróide certo
  ellipse(xr3,yr3,40)
  textSize(30)
  fill(0)
  text("32",xr3,yr3+10)
  fill(250)
  
  
  //asteróides errados
  ellipse(xe5,ye5,40)
  fill(0)
  text("36",xe5,ye5+10)
  fill(255)
  ellipse(xe6,ye6,40)  
  fill(0)
  text("34",xe6,ye6+10)
  
  //astronauta
  imageMode(CENTER)
  image(astro,mouseX,mouseY,35,65)
  imageMode(CORNER)
  
  if(dist(mouseX,mouseY,xr3,yr3)<35){
     tela=9
     }    
  if(dist(mouseX,mouseY,xe5,xe5)<35){
     tela=6
     }    
  if(dist(mouseX,mouseY,xe6,ye6)<35){
     tela=6
     }    
}