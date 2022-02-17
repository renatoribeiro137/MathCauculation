function tela3(){
  background('black');
  
  //nome da tela
  textSize(60)
  textAlign(CENTER)
  textFont('fantasy')
  fill('yellow')
  text("Instruções",300,70)

  
  //botão de voltar
  rect(5,5,55,25);
  textSize(19)
  fill("black")
  text("Voltar",33,25)
  
  //instruções
  textSize(20)
  textFont('cursive')
  textAlign(CENTER)
  fill("yellow")
  text("Para salvar o planeta Terra, o astronauta precisa \n demonstrar seus conhecimentos matemáticos.\nControle-o através do mouse e resolva as operações",300,120)
  text("  As três primeiras fases testarão seus \n conhecimentos de adição e subtração ",300,210)
  text("As três últimas fases irão \ntestar seu conhecimento de multiplicação e divisão",300,270)
  text("Para vencer o jogo basta completar as 6 fases.",300,335)
}