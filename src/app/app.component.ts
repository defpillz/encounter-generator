import { Component } from '@angular/core';
import { WordService } from '../app/word.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private wordService: WordService) {
    this.generateEncounter();
  }

  title = 'encounter-generator';
  encounter: string;

  generateEncounter(): void {
    this.encounter = `The party must ${this.wordService.getVerb()} ${this.determineAorAn(this.ojectOrCreature())} in 
    the ${this.wordService.getObjectAdjective()} ${this.wordService.getLocation()}
    but they are ${this.wordService.getInterruption()} ${this.determineAorAn(this.wordService.getAdjective())}
     ${this.getCreature()}.`;
  }

  getCreature(): string {
    let str = this.wordService.getCreature();
    return Math.random() > .90 ? `${str} ${this.wordService.getClass()}` : str;
  }
  ojectOrCreature(): string {
    return Math.random() % 2 == 0 ?
      `${this.wordService.getObjectAdjective()} ${this.wordService.getObject()}` :
      `${this.wordService.getAdjective()} ${this.wordService.getCreature()}`;
  }

  startsWithVowel(str: string): boolean {
    let firstChar = str.toLowerCase().charAt(0);
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(firstChar);
  }

  determineAorAn(str: string): string {
    return this.startsWithVowel(str) ? `an ${str}` : `a ${str}`;
  }
}
