import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BaseService } from './base.service';

describe('BaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({
  }));

  it('should be created', () => {
    const service: BaseService = new BaseService('Test');
    expect(service).toBeTruthy();
  });
});
