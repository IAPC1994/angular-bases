import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})

export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name:'Goku',
    power: 9500
  },{
    id: uuid(),
    name:'Vegeta',
    power: 8500
  }];

  addCharacter(character: Character):void{
    //this.characters.unshift(character); Insert the element at the beggining
    const newCharacter: Character = { id: uuid(),...character }
    this.characters.push(newCharacter); // Insert the element in the last place
  }

  // onDeleteCharacter(index:number):void{
  //   this.characters.splice(index, 1);
  // }

  deleteCharacterById( id:string ){
    this.characters = this.characters.filter( c => c.id !== id );
  }

}
