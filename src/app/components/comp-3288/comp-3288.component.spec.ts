import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3288Component } from './comp-3288.component';

describe('Comp3288Component', () => {
  let component: Comp3288Component;
  let fixture: ComponentFixture<Comp3288Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3288Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3288Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
