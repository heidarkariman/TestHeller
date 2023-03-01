import { TestBed } from '@angular/core/testing';

import { ToolUsageService } from './tool-usage.service';

describe('ToolUsageService', () => {
  let service: ToolUsageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToolUsageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
