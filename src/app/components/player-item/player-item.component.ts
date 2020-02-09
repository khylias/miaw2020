import { Component, OnInit, Input } from '@angular/core';

import { FormManagerService } from 'src/app/services';
import { Player } from 'src/app/models';

@Component({
  selector: 'app-player-item',
  templateUrl: './player-item.component.html',
  styleUrls: ['./player-item.component.scss']
})
export class PlayerItemComponent implements OnInit {
  @Input() player: Player;
  @Input() isSelected = false;

  constructor(private formManagerService: FormManagerService) { }

  ngOnInit() {
    console.log(this.player);
  }

  public selectPlayer(): void {
    this.isSelected = !this.isSelected;
    this.formManagerService.select(this.player);
  }
}
