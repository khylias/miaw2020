import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormManagerService {
  public selected: EventEmitter<any> = new EventEmitter();

  constructor() { }

  public select(player): void {
    this.selected.emit(player);
  }
}
