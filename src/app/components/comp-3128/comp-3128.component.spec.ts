import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3128Component } from './comp-3128.component';

describe('Comp3128Component', () => {
  let component: Comp3128Component;
  let fixture: ComponentFixture<Comp3128Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3128Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3128Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
