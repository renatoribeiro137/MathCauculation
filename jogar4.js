function tela9(){
  background(back,0,0);
 
 
  
  //nome da tela
  textSize(50)
  textAlign(CENTER)
  fill("white")
  text("Space Calculation",300,45)
  
   //fase
  textSize(30)
  fill('white')
  text("fase 4",45,390)
  text("Muito bem!",180,390)
  
  //Botão de voltar
  rect(5,5,55,25);
  textSize(19)
  fill("black")
  text("Voltar",33,25)
  
  //pergunta
  fill('white')
  textSize(40)
  text('3x2=?',70,90)
  
  //asteróide certo
  ellipse(xr4,yr4,40)
  textSize(30)
  fill(0)
  text("6",xr4,yr4+10)
  fill(250)
  
  
  //asteróides errados
  ellipse(xe7,ye7,40)
  fill(0)
  text("13",xe7,ye7+10)
  fill(255)
  ellipse(xe8,ye8,40)  
  fill(0)
  text("9",xe8,ye8+10)
  
  //astronauta
  imageMode(CENTER)
  image(astro,mouseX,mouseY,35,65)
  imageMode(CORNER)
  
  if(dist(mouseX,mouseY,xr4,yr4)<35){
     tela=10
     }    
  if(dist(mouseX,mouseY,xe7,xe7)<35){
     tela=6
     }    
  if(dist(mouseX,mouseY,xe8,ye8)<35){
     tela=6
     }    
}