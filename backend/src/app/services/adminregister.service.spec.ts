import { TestBed } from '@angular/core/testing';

import { AdminregisterService } from './adminregister.service';

describe('AdminregisterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminregisterService = TestBed.get(AdminregisterService);
    expect(service).toBeTruthy();
  });
});
