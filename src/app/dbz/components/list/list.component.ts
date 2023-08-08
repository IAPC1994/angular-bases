import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10000,
  }]

  @Output()
  // public onDeleteId: EventEmitter<number> = new EventEmitter();
  public onDeleteId: EventEmitter<string> = new EventEmitter();

  // onDeleteCharacter(index:number):void{
  //   //TODO: emit ID of the character
  //   this.onDeleteId.emit( index );
  // }

  onDeleteCharacter( id?:string ):void{
    if( !id ) return;
    this.onDeleteId.emit(id);
  }

}
