import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3826Component } from './comp-3826.component';

describe('Comp3826Component', () => {
  let component: Comp3826Component;
  let fixture: ComponentFixture<Comp3826Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3826Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3826Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
