import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Player } from './../../../models';
import { ApiService, FormManagerService } from 'src/app/services';

@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.scss']
})
export class TeamFormComponent implements OnInit {
  public form: FormGroup;

  public availablePlayers: Player[] = [];

  public isEdition = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private apiService: ApiService,
    private formManagerService: FormManagerService) { }

  ngOnInit() {
    this.isEdition = this.route.snapshot.routeConfig.path !== 'nouveau';

    console.log(this.isEdition);

    this.getData();
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      players: this.fb.array([])
    });

    this.formManagerService.selected.subscribe(playerAdded => {
      console.log(playerAdded);
      this.addPlayer(playerAdded);
    });
  }

  public submit(): void {
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value);

    if (this.isEdition) {
      this.apiService.updateTeamById(this.route.snapshot.paramMap.get('id'), this.form.value).subscribe(response => {
        console.log('Team updated !');
      });
    } else {
      this.apiService.createTeam(this.form.value).subscribe(response => {
        console.log('Team created !');
      });
    }
  }

  public get players(): FormArray {
    return this.form.get('players') as FormArray;
  }

  public addPlayer(player: Player): void {
    this.players.push(this.fb.group({
      id: [player.id],
      firstName: [player.firstName],
      lastName: [player.lastName]
    }));
  }

  public removePlayer(index: number): void {
    this.players.removeAt(index);
  }

  private getData(): void {
    this.apiService.getPlayers().subscribe(response => {
      this.availablePlayers = response;
    });

    if (this.isEdition) {
      this.apiService.getTeamById(this.route.snapshot.paramMap.get('id')).subscribe(res => {
        this.form.patchValue({
          name: res.name,
          players: res.players.map(player => this.fb.group({
            id: [player.id],
            firstName: [player.firstName],
            lastName: [player.lastName]
          }))
        });
      });
    }
  }
}
