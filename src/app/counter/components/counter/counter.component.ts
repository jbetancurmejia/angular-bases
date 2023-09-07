import { Component } from "@angular/core";
@Component({
  selector:'app-counter',
  template:`<h3>Counter : {{counter}} </h3>
  <button (click)="increaseBy(1)">+1</button>
  <button (click)="reset()">reset</button>
  <button (click)="decrementaBy()">-1</button>`
})
export class CounterComponent{

// title = 'Mi primera app de Angular';
public defaultValueConter:number=10;
public counter: number =this.defaultValueConter;

increaseBy(value:number): void {
  this.counter += value;
}
reset():void{
this.counter=this.defaultValueConter;
}
decrementaBy(): void {
  this.counter +=-1;
}


}
