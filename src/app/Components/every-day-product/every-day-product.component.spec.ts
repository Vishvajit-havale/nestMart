import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EveryDayProductComponent } from './every-day-product.component';

describe('EveryDayProductComponent', () => {
  let component: EveryDayProductComponent;
  let fixture: ComponentFixture<EveryDayProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EveryDayProductComponent]
    });
    fixture = TestBed.createComponent(EveryDayProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
