import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4804Component } from './comp-4804.component';

describe('Comp4804Component', () => {
  let component: Comp4804Component;
  let fixture: ComponentFixture<Comp4804Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4804Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4804Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
