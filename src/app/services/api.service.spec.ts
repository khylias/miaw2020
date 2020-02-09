import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ApiService } from './api.service';

describe('ApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
      imports: [
          HttpClientTestingModule,
      ]
  }));

  it('should be created', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service).toBeTruthy();
  });

  it('should get players', () => {
      const service = TestBed.get(ApiService);
      const backend = TestBed.get(HttpTestingController);

      service.getPlayers().subscribe();
      backend.expectOne({
          url: 'http://localhost:1337/players',
          method: 'GET'
      }, 'GET TO /players');
  });
});
