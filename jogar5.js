function tela10(){
  background(back,0,0);
 
 
  
  //nome da tela
  textSize(50)
  textAlign(CENTER)
  fill("white")
  text("Space Calculation",300,45)
  
   //fase
  textSize(30)
  fill('white')
  text("fase 5",45,390)
  
  //Botão de voltar
  rect(5,5,55,25);
  textSize(19)
  fill("black")
  text("Voltar",33,25)
  
  //pergunta
  fill('white')
  textSize(40)
  text('9x9=?',70,90)
  
  //asteróide certo
  ellipse(xr5,yr5,40)
  textSize(30)
  fill(0)
  text("81",xr5,yr5+10)
  fill(250)
  
  
  //asteróides errados
  ellipse(xe9,ye9,40)
  fill(0)
  text("99",xe9,ye9+10)
  fill(255)
  ellipse(xe10,ye10,40)  
  fill(0)
  text("73",xe10,ye10+10)
  
  //astronauta
  imageMode(CENTER)
  image(astro,mouseX,mouseY,35,65)
  imageMode(CORNER)
  
  if(dist(mouseX,mouseY,xr5,yr5)<35){
     tela=11
     }    
  if(dist(mouseX,mouseY,xe9,xe9)<35){
     tela=6
     }    
  if(dist(mouseX,mouseY,xe10,ye10)<35){
     tela=6
     }    
}