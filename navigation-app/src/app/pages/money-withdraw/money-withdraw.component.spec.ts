import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyWithdrawComponent } from './money-withdraw.component';

describe('MoneyWithdrawComponent', () => {
  let component: MoneyWithdrawComponent;
  let fixture: ComponentFixture<MoneyWithdrawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneyWithdrawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyWithdrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
