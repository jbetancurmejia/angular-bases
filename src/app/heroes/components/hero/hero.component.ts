import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'iroman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeAge(edad: number): void {
    this.age = edad;
  }


  changeName(name: string) {
    this.name = name;
  }

  resetForm(): void {
    this.name = 'iroman';
    this.age = 45;
  }

}
