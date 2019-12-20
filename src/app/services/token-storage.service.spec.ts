import { TestBed, inject } from '@angular/core/testing';

import { LocalStorageService } from '@rars/ngx-webstorage';
import { TokenStorageService } from './token-storage.service';

describe('TokenStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LocalStorageService,
        TokenStorageService
      ]
    });
  });

  it('should be created', inject([TokenStorageService], (service: TokenStorageService) => {
    expect(service).toBeTruthy();
  }));

  it('should store token', inject([TokenStorageService], (service: TokenStorageService) => {
    const lss = TestBed.get(LocalStorageService);
    spyOn(lss, 'store');

    service.setToken('token');

    expect(lss.store).toHaveBeenCalled();
  }));

  it('should delete token', inject([TokenStorageService], (service: TokenStorageService) => {
    const lss = TestBed.get(LocalStorageService);
    spyOn(lss, 'clear');

    service.deleteToken();

    expect(lss.clear).toHaveBeenCalled();
  }));

  it('should disconnect', inject([TokenStorageService], (service: TokenStorageService) => {
    spyOn(service, 'deleteToken');

    service.disconnect();

    expect(service.deleteToken).toHaveBeenCalled();
  }));
});
