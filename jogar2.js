function tela7(){
  background(back,0,0);
 
 
  
  //nome da tela
  textSize(50)
  textAlign(CENTER)
  fill("white")
  text("Space Calculation",300,45)
  
   //fase
  textSize(30)
  fill('white')
  text("fase 2",45,390)
  
  //Botão de voltar
  rect(5,5,55,25);
  textSize(19)
  fill("black")
  text("Voltar",33,25)
  
  //pergunta
  fill('white')
  textSize(40)
  text('7+5=?',70,90)
  
  //asteróide certo
  ellipse(xr2,yr2,40)
  textSize(30)
  fill(0)
  text("12",xr2,yr2+10)
  fill(250)
  
  
  //asteróides errados
  ellipse(xe3,ye3,40)
  fill(0)
  text("14",xe3,ye3+10)
  fill(255)
  ellipse(xe4,ye4,40)  
  fill(0)
  text("11",xe4,ye4+10)
  
  //astronauta
  imageMode(CENTER)
  image(astro,mouseX,mouseY,35,65)
  imageMode(CORNER)
  
  if(dist(mouseX,mouseY,xr2,yr2)<35){
     tela=8
     }    
  if(dist(mouseX,mouseY,xe3,xe3)<35){
     tela=6
     }    
  if(dist(mouseX,mouseY,xe4,ye4)<35){
     tela=6
     }    
}
