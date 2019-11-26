import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-player-item',
  templateUrl: './player-item.component.html',
  styleUrls: ['./player-item.component.scss']
})
export class PlayerItemComponent implements OnInit {
  @Input() player;

  public isSelected = false;

  constructor() { }

  ngOnInit() {
    console.log(this.player);
  }

  public selectPlayer(): void {
    this.isSelected = !this.isSelected;
  }
}
