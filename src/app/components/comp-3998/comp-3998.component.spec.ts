import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3998Component } from './comp-3998.component';

describe('Comp3998Component', () => {
  let component: Comp3998Component;
  let fixture: ComponentFixture<Comp3998Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3998Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3998Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
