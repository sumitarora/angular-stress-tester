import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1223Component } from './comp-1223.component';

describe('Comp1223Component', () => {
  let component: Comp1223Component;
  let fixture: ComponentFixture<Comp1223Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1223Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1223Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
