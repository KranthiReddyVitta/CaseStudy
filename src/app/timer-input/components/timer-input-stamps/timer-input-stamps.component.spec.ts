import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerInputStampsComponent } from './timer-input-stamps.component';

describe('TimerInputStampsComponent', () => {
  let component: TimerInputStampsComponent;
  let fixture: ComponentFixture<TimerInputStampsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimerInputStampsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerInputStampsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should display start/pause'),
    () => {
      const component = fixture.componentInstance;
      component.stamps = [
        { type: 'Started', val: 100 },
        { type: 'Paused', val: 50 },
      ];
      fixture.detectChanges();
      expect(component.stamps).toEqual([
        { type: 'Started', val: 100 },
        { type: 'Paused', val: 50 },
      ]);
    };
});
