import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3016Component } from './comp-3016.component';

describe('Comp3016Component', () => {
  let component: Comp3016Component;
  let fixture: ComponentFixture<Comp3016Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3016Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3016Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
