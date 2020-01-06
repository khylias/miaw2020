import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApiService, TokenStorageService } from 'src/app/services';
import { Team } from 'src/app/models';

@Component({
  selector: 'app-team-view',
  templateUrl: './team-view.component.html',
  styleUrls: ['./team-view.component.scss']
})
export class TeamViewComponent implements OnInit {
  public team: Team;

  constructor(private route: ActivatedRoute,
    private apiService: ApiService,
    public tokenStorageService: TokenStorageService) { }

  ngOnInit() {
    this.getData();
  }

  private getData(): void {
    this.apiService.getTeamById(this.route.snapshot.paramMap.get('id')).subscribe(res => {
      this.team = res;
    });
  }

}
