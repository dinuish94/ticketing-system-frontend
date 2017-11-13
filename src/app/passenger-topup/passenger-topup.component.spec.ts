import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerTopupComponent } from './passenger-topup.component';

describe('PassengerTopupComponent', () => {
  let component: PassengerTopupComponent;
  let fixture: ComponentFixture<PassengerTopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassengerTopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerTopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
