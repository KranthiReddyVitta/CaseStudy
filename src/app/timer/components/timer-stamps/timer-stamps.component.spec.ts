import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerStampsComponent } from './timer-stamps.component';

describe('TimerStampsComponent', () => {
  let component: TimerStampsComponent;
  let fixture: ComponentFixture<TimerStampsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerStampsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerStampsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
