import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollComponent } from './scroll.component';

describe('ScrollComponent', () => {
  let component: ScrollComponent;
  let fixture: ComponentFixture<ScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScrollComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increase scroll values'),
    () => {
      component.onScroll();
      fixture.detectChanges();
      expect(component.elements).toBe([1, 2, 3, 4, 5]);
      expect(component.count).toEqual(5);
    };

    it("should call alert"), () => {
      spyOn(window, "alert");
      component.alertButton(3);
      fixture.detectChanges();
      expect(window.alert).toHaveBeenCalledWith("Button 3 clicked");}

    it('should call scroll' , () => {
      spyOn(component,'onScroll');
      component.onScroll();
      expect(component.elements.length).toEqual(4);
    })
});
