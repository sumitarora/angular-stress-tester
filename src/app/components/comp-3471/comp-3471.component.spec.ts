import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3471Component } from './comp-3471.component';

describe('Comp3471Component', () => {
  let component: Comp3471Component;
  let fixture: ComponentFixture<Comp3471Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3471Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3471Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
