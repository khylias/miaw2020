import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TeamFormComponent } from './team-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { PlayerItemComponent } from '../../player-item/player-item.component';
import { MatCardModule } from '@angular/material/card';
import { LocalStorageService } from '@rars/ngx-webstorage';
import { TokenStorageService, FormManagerService, ApiService } from 'src/app/services';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';

describe('TeamFormComponent', () => {
	let component: TeamFormComponent;
	let fixture: ComponentFixture<TeamFormComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				BrowserAnimationsModule,
				MatFormFieldModule,
				MatButtonModule,
				MatInputModule,
				MatSnackBarModule,
				ReactiveFormsModule,
				MatCardModule,
				RouterTestingModule,
				HttpClientTestingModule,
			],
			declarations: [TeamFormComponent, PlayerItemComponent],
			providers: [
				LocalStorageService,
				TokenStorageService,
				{
					provide: ActivatedRoute,
					useValue: {
						snapshot: {
							routeConfig: {
								path: 'nouveau'
							}
						}
					}
				}
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(TeamFormComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should init component', () => {
		// do some tests
		const formManagerService = TestBed.get(FormManagerService);
		spyOn(component, 'getData');
		spyOn(formManagerService, 'selected');
		spyOn(component, 'addPlayer');

		component.ngOnInit();
		formManagerService.select({ id: 2, firstName: 'Philippe', lastName: 'Charles' });

		expect(component.form.value).toEqual({
			name: '',
			players: [],
			cover: ''
		});
		expect(component.getData).toHaveBeenCalled();
		expect(component.addPlayer).toHaveBeenCalledWith({ id: 2, firstName: 'Philippe', lastName: 'Charles' })
	});

	it('should get Data', () => {
		const apiService = TestBed.get(ApiService);
		spyOn(apiService, 'getPlayers').and.returnValue(of([
			{id: 1, firstName: 'Charly', lastName: 'Henri'},
			{id: 2, firstName: 'Alexy', lastName: 'Poulony'}
		]));

		component.getData();

		expect(apiService.getPlayers).toHaveBeenCalled();
		expect(component.availablePlayers).toEqual([
			{ id: 1, firstName: 'Charly', lastName: 'Henri' },
			{ id: 2, firstName: 'Alexy', lastName: 'Poulony' }
		])
	});
});