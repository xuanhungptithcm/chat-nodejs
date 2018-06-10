import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserprofitComponent } from './userprofit.component';

describe('UserprofitComponent', () => {
  let component: UserprofitComponent;
  let fixture: ComponentFixture<UserprofitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserprofitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserprofitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
