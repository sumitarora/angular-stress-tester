import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3804Component } from './comp-3804.component';

describe('Comp3804Component', () => {
  let component: Comp3804Component;
  let fixture: ComponentFixture<Comp3804Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3804Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3804Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
