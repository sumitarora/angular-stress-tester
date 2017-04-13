import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3265Component } from './comp-3265.component';

describe('Comp3265Component', () => {
  let component: Comp3265Component;
  let fixture: ComponentFixture<Comp3265Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3265Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3265Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
