import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorTopupComponent } from './visitor-topup.component';

describe('VisitorTopupComponent', () => {
  let component: VisitorTopupComponent;
  let fixture: ComponentFixture<VisitorTopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorTopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorTopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
