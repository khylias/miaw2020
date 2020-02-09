import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerItemComponent } from './player-item.component';
import { MatCardModule } from '@angular/material/card';
import { FormManagerService } from 'src/app/services';

describe('PlayerItemComponent', () => {
  let component: PlayerItemComponent;
  let fixture: ComponentFixture<PlayerItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
      ],
      declarations: [ PlayerItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerItemComponent);
    component = fixture.componentInstance;
    component.player = {
      id: 1,
      firstName: 'Jean',
      lastName: 'Dupont',
      birthdayDate: '10/10/1999',
      avatar: 'test.png',
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select player', () => {
    // do some test...
    const formManagerService = TestBed.get(FormManagerService);
    spyOn(formManagerService, 'select');

    component.selectPlayer();

    expect(component.isSelected).toBeTruthy();
    expect(formManagerService.select).toHaveBeenCalled();
  });
});
