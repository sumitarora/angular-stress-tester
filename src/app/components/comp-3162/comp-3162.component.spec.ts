import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3162Component } from './comp-3162.component';

describe('Comp3162Component', () => {
  let component: Comp3162Component;
  let fixture: ComponentFixture<Comp3162Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3162Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3162Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
