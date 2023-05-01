import { TestBed } from '@angular/core/testing';

import { ActivityDetailGuard } from './activity-detail.guard';

describe('ActivityDetailGuard', () => {
  let guard: ActivityDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ActivityDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
