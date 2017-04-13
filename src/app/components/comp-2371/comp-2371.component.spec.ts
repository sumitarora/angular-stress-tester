import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2371Component } from './comp-2371.component';

describe('Comp2371Component', () => {
  let component: Comp2371Component;
  let fixture: ComponentFixture<Comp2371Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2371Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2371Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
