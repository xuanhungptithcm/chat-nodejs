import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchContentElementComponent } from './search-content-element.component';

describe('SearchContentElementComponent', () => {
  let component: SearchContentElementComponent;
  let fixture: ComponentFixture<SearchContentElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchContentElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchContentElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
