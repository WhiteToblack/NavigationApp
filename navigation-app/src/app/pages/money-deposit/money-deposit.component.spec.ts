import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyDepositComponent } from './money-deposit.component';

describe('MoneyDepositComponent', () => {
  let component: MoneyDepositComponent;
  let fixture: ComponentFixture<MoneyDepositComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneyDepositComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
