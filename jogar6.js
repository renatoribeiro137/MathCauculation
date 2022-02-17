function tela11(){
  background(back,0,0);
 
 
  
  //nome da tela
  textSize(50)
  textAlign(CENTER)
  fill("white")
  text("Space Calculation",300,45)
  
   //fase
  textSize(30)
  fill('white')
  text("fase 6",45,390)
  text("Quase lá...",170,390)
  
  //Botão de voltar
  rect(5,5,55,25);
  textSize(19)
  fill("black")
  text("Voltar",33,25)
  
  //pergunta
  fill('white')
  textSize(40)
  text('36/4=?',70,90)
  
  //asteróide certo
  ellipse(xr6,yr6,40)
  textSize(30)
  fill(0)
  text("9",xr6,yr6+10)
  fill(250)
  
  
  //asteróides errados
  ellipse(xe11,ye11,40)
  fill(0)
  text("6",xe11,ye11+10)
  fill(255)
  ellipse(xe12,ye12,40)  
  fill(0)
  text("4",xe12,ye12+10)
  
  //astronauta
  imageMode(CENTER)
  image(astro,mouseX,mouseY,35,65)
  imageMode(CORNER)
  
  if(dist(mouseX,mouseY,xr6,yr6)<35){
     tela=5
     }    
  if(dist(mouseX,mouseY,xe11,xe11)<35){
     tela=6
     }    
  if(dist(mouseX,mouseY,xe12,ye12)<35){
     tela=6
     }    
}