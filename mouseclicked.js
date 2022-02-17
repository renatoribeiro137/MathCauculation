function mouseClicked(){
  if(tela==1){
    if(mouseX>=200 && mouseX<=400 && mouseY>=150 && mouseY<=200){
    tela=2;
    }else if(mouseX>=200 && mouseX<=400 && mouseY>=230 && mouseY<=280){
    tela=3;
    }else if(mouseX>=200 && mouseX<=400 && mouseY>=310 && mouseY<=360){
    tela=4;
    }
  }
    if(mouseX>=5 && mouseX<=60 && mouseY>=5 && mouseY<=30){
    tela=1;
    }    
}  
