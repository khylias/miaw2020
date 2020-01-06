import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

import { Team } from './../../../models/team';
@Component({
  selector: 'app-team-item',
  templateUrl: './team-item.component.html',
  styleUrls: ['./team-item.component.scss']
})
export class TeamItemComponent implements OnInit {
  @Input() team: Team;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  public navigate(): void {
    this.router.navigate(['/equipe', this.team.id]);
  }

}
