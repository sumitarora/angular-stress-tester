import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3138Component } from './comp-3138.component';

describe('Comp3138Component', () => {
  let component: Comp3138Component;
  let fixture: ComponentFixture<Comp3138Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3138Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3138Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
