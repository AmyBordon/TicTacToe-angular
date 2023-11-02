import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit{

  squares: string[];
  xIsNext: boolean;
  i: number;
  winner: string;
  end: boolean;
  

  constructor(){}

   ngOnInit(): void {
      this.end=false;
      this.newGame();
    }

    newGame(){
      this.squares = Array(9).fill('');
      this.winner='';
      this.xIsNext=true;
      this.end=false;
    }

    get player(){
      return this.xIsNext ? 'X' : '0';
    }

    makeMove(idx: number){
      if(!this.squares[idx] && this.end==false){
        this.squares.splice(idx, 1, this.player);
        this.xIsNext=!this.xIsNext;
      }
      if(this.end==false)
     this.winner = this.calculateWinner();
    }

    calculateWinner(){
      const lines=[
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for(let i=0; i<lines.length; i++){
        const [a,b,c] = lines[i];
        if(this.squares[a] && this.squares[a]===this.squares[b] && this.squares[a]===this.squares[c] && this.winner==''){
          this.end=true;
          return this.squares[a];
        }
      }
      return '';
    }
}
