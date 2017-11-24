import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerHistoryComponent } from './passenger-history.component';

describe('PassengerHistoryComponent', () => {
  let component: PassengerHistoryComponent;
  let fixture: ComponentFixture<PassengerHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassengerHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
