import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NumberFormatStyle } from '@angular/common';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() countRep = new EventEmitter<{soFarCount:Number}>();
  count:number = 0;
  ref:any = '';
  constructor() { }

  counterCount()
  {
    this.count = 0;
    this.ref = setInterval(()=>{
      this.count = this.count + 1;
      this.countRep.emit({soFarCount: this.count});
      /* console.log(this.count); */
    },1000)
  }
  counterReset(){
    clearInterval(this.ref);
  }
  ngOnInit() {
  }

}
