import { Team } from './models/team';
import { Component } from '@angular/core';

import { Player } from './models/player';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public players: Player[] = [
    {
      id: 'j1',
      firstName: 'Levani',
      lastName: 'Botia',
      poste: '3eme ligne',
      taille: '1m60',
      birthdayDate: '1990-10-12',
      absent: true,
      profilPicture: 'https://www.staderochelais.com/sites/stade-rochelais/files/styles/squared_persona/public/persona/profil/botia-1538408110.png?itok=31LR2fNd'
    },
    {
      id: 'j2',
      firstName: 'Mohamed',
      lastName: 'Boughani',
      poste: 'Pillier',
      taille: '1m94',
      birthdayDate: '1985-06-18',
      absent: false,
      profilPicture: 'https://www.staderochelais.com/sites/stade-rochelais/files/styles/squared_persona/public/persona/profil/boughanmi-1538407931.png?itok=ZDwRJGR_'
    }
  ];

  public teams: Team[] = [
    {
      name: 'Stade 1',
      players: []
    }
  ];
}
