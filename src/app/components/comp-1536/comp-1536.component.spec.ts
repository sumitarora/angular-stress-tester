import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1536Component } from './comp-1536.component';

describe('Comp1536Component', () => {
  let component: Comp1536Component;
  let fixture: ComponentFixture<Comp1536Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1536Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1536Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
