import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3372Component } from './comp-3372.component';

describe('Comp3372Component', () => {
  let component: Comp3372Component;
  let fixture: ComponentFixture<Comp3372Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3372Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3372Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
