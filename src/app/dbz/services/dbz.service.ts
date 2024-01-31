import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  private characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500,
    },
  ];

  get getCharacters(): Character[] {
    return this.characters;
  }

  addCharacter(character: Character): void {
    character.id = uuid();
    const newCharacter: Character = {
      ...character,
    };
    this.characters.push(newCharacter);
  }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter((char) => char.id !== id);
  }
}
