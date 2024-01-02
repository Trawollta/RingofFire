import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from '../../models/game';


@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent implements OnInit{

  pickCardAnimation= false;
  currentCard!: string;
  game!: Game;
  name: string = '';

  constructor() {}

  ngOnInit():void {
    
  }

  newGame(){
    this.game=new Game();

  }


  takeCard() {
    if(!this.pickCardAnimation){
      this.currentCard = this.game.stack.pop();
      this.pickCardAnimation = true;

    setTimeout(()=>{
      this.game.playedCard.push(this.currentCard);
      this.pickCardAnimation = false;
  }, 1500);
  }

  }
}