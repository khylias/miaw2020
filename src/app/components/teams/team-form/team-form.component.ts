import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.scss']
})
export class TeamFormComponent implements OnInit {
  public form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      players: this.fb.array([
        this.fb.group({
          firstName: [''],
          lastName: ['']
        })
      ])
    });
  }

  public submit(): void {
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value);
    console.log(this.form.valid);
  }

  public get players(): FormArray {
    return this.form.get('players') as FormArray;
  }

  public addPlayer(): void {
    this.players.push(this.fb.group({
      firstName: [''],
      lastName: ['']
    }));
  }

  public removePlayer(index: number): void {
    this.players.removeAt(index);
  }
}
