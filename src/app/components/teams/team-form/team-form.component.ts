import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Player } from './../../../models';
import { ApiService, FormManagerService, TokenStorageService } from 'src/app/services';

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
    private router: Router,
    public tokenStorageService: TokenStorageService,
    private formManagerService: FormManagerService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.isEdition = this.route.snapshot.routeConfig.path !== 'nouveau';

    this.getData();
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      players: this.fb.array([]),
      cover: ['']
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
        this.snackBar.open('L\'équipe a bien été modifié !', '', {
          duration: 4000
        });
      });
    } else {
      this.apiService.createTeam(this.form.value).subscribe(response => {
        console.log('Team created !');
        this.router.navigate(['/equipe', response.id]);
        this.snackBar.open('L\'équipe a bien été créée !', '', {
          duration: 4000
        });
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
          cover: res.cover,
        });
        res.players.forEach(player => this.addPlayer(player));
        console.log(this.form.value);
      });
    }
  }

  public isInTeam(id): boolean {
    return this.players.value.find(player => player.id === id);
  }

  public delete(): void {
    this.apiService.deleteTeam(this.route.snapshot.paramMap.get('id')).subscribe(res => {
      this.router.navigate(['/']);
    });
  }
}
