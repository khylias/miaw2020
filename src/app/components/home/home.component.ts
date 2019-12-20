import { Component, OnInit } from '@angular/core';

import { ApiService } from 'src/app/services';
import { Team } from 'src/app/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public teams: Team[] = [];

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
