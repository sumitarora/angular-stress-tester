import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3404Component } from './comp-3404.component';

describe('Comp3404Component', () => {
  let component: Comp3404Component;
  let fixture: ComponentFixture<Comp3404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
