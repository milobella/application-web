import { TestBed } from '@angular/core/testing';

import { MilobellaService } from './milobella.service';

describe('MilobellaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MilobellaService = TestBed.get(MilobellaService);
    expect(service).toBeTruthy();
  });
});
