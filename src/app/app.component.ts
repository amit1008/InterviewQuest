import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  evenCount:number;
  countPrint(num:{soFarCount:number}){
    this.evenCount = num.soFarCount;
    console.log(num.soFarCount);
  }
}
