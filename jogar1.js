function tela2(){
  background(back,0,0);
 
 
  
  //nome da tela
  textSize(50)
  textAlign(CENTER)
  fill("white")
  text("Space Calculation",300,45)
  
   //fase
  textSize(30)
  fill('white')
  text("fase 1",45,390)
  
  //Botão de voltar
  rect(5,5,55,25);
  textSize(19)
  fill("black")
  text("Voltar",33,25)
  
  //pergunta
  fill('white')
  textSize(40)
  text('13+4=?',70,90)
  
  //asteróide certo
  ellipse(xr,yr,40)
  textSize(30)
  fill(0)
  text("17",xr,yr+10)
  fill(250)
  
  
  //asteróides errados
  ellipse(xe1,ye1,40)
  fill(0)
  text("16",xe1,ye1+10)
  fill(255)
  ellipse(xe2,ye2,40)  
  fill(0)
  text("18",xe2,ye2+10)
  
  //astronauta
  imageMode(CENTER)
  image(astro,mouseX,mouseY,35,65)
  imageMode(CORNER)
  
  if(dist(mouseX,mouseY,xr,yr)<35){
     tela=7
     }    
  if(dist(mouseX,mouseY,xe1,ye1)<35){
     tela=6
     }    
  if(dist(mouseX,mouseY,xe2,ye2)<35){
     tela=6
     }    
}
