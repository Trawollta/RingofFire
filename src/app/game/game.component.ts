import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from '../../models/game';
import { PlayerComponent } from '../player/player.component';


@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    CommonModule, 
    PlayerComponent
  ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent implements OnInit{

  pickCardAnimation= false;
  currentCard: any;
  game!: Game;

  constructor() {}

  ngOnInit():void {
    
  }

  public newGame():void {
    this.game=new Game();

  }


  public takeCard(): void {
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
