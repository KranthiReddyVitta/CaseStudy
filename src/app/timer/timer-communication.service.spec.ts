import { TestBed } from '@angular/core/testing';

import { TimerCommunicationService } from './timer-communication.service';

describe('TimerCommunicationService', () => {
  let service: TimerCommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimerCommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
