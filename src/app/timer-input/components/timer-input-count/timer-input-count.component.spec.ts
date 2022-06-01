import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerInputCountComponent } from './timer-input-count.component';

describe('TimerInputCountComponent', () => {
  let component: TimerInputCountComponent;
  let fixture: ComponentFixture<TimerInputCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimerInputCountComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerInputCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should display start/pause'),
    () => {
      spyOnProperty(component.stamps, 'set').and.callThrough();
      fixture.detectChanges();
      expect(component.start).toEqual(1);
      expect(component.pause).toEqual(1);
    };
});
