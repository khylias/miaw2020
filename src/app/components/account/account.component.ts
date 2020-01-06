import { Component, OnInit } from '@angular/core';

import { ApiService } from 'src/app/services';
import { Team } from 'src/app/models';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  public teams: Team[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getTeams();
  }

  private getTeams(): void {
    this.apiService.getTeams().subscribe(res => {
      this.teams = res;
    });
  }

}
