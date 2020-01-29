import { Component, Input, ViewChild, OnInit, AfterViewInit } from '@angular/core';

import { FormManagerService } from 'src/app/services';
import { Player } from './../../models/player';

@Component({
  selector: 'app-player-item',
  templateUrl: './player-item.component.html',
  styleUrls: ['./player-item.component.scss']
})
export class PlayerItemComponent implements OnInit, AfterViewInit {
  @ViewChild('matCard', { static: false }) matCard;
  @Input() player: Player;
  @Input() isSelected = false;
  @Input() useToSelect = false;

  constructor(private formManagerService: FormManagerService) {
    this.log('constructor');
  }

  ngOnInit() {
    this.log('OnInit');
  }

  ngAfterViewInit() {
    this.log('AfterViewInit');
  }

  log(hook: string): void {
    console.log(hook + ' Player log: ', this.player);
    console.log(hook + ' MatCard child log: ', this.matCard);
    console.log('---------------------------------');
  }














  public selectPlayer(): void {
    if (!this.useToSelect) {
      return;
    }
    this.isSelected = !this.isSelected;
    this.formManagerService.select(this.player);
  }
}
