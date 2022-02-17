function tela4(){
  background('white');
  
  //Nome da tela
  textSize(60)
  textAlign(CENTER)
  fill('#7600a9')
  text("Créditos",300,70)
  
  //botão de voltar
  rect(5,5,55,25);
  textSize(19);
  fill("white");
  text("Voltar",33,25);
  
  //creditos
  textSize(24);
  textAlign(LEFT)
  fill(0);
  text("José Renato de Araújo Ribeiro:Programador",105,150);
  text("Rummenigge Rudson Dantas:Educador",105,250);
  text("Sergio Queiroz de Medeiros:Educador",105,345)  
  
  //fotos
  image(renato,20,85,80,100);
  image(rumme,25,190,70,90);
  image(sergio,20,285,80,100);
}