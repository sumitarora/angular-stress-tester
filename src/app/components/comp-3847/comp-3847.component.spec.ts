import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3847Component } from './comp-3847.component';

describe('Comp3847Component', () => {
  let component: Comp3847Component;
  let fixture: ComponentFixture<Comp3847Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3847Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3847Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
