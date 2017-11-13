import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerAccountComponent } from './passenger-account.component';

describe('PassengerAccountComponent', () => {
  let component: PassengerAccountComponent;
  let fixture: ComponentFixture<PassengerAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassengerAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
