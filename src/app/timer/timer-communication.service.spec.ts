import { Component } from '@angular/core';
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

  it('should call updatetimer', () => {
    service.updateTimer([{ type: 'Started', value: 100 }]);
    expect(service.timerStamps.getValue()).toEqual([
      { type: 'Started', value: 100 },
    ]);
  });

  it('should call updateLast', () => {
    service.updateLast([{ type: 'Started', value: 100 }]);
    expect(service.timerLast.getValue()).toEqual([
      { type: 'Started', value: 100 },
    ]);
  });

  it('should call reset', () => {
    service.reset();
    expect(service.timerStamps.getValue()).toEqual(null);
    expect(service.timerLast.getValue()).toEqual(null);
    expect(service.currentTime.getValue()).toEqual(null);
  });
});
