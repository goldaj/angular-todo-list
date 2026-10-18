import { TestBed,  inject } from '@angular/core/testing';

import { ProductionGuard } from './production.guard';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProductionGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductionGuard],
      imports : [RouterTestingModule]
    });
  });

  it('should ...', inject([ProductionGuard], (guard: ProductionGuard) => {
    expect(guard).toBeTruthy();
  }));
});
