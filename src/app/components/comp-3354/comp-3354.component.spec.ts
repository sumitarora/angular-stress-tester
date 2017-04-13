import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3354Component } from './comp-3354.component';

describe('Comp3354Component', () => {
  let component: Comp3354Component;
  let fixture: ComponentFixture<Comp3354Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3354Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3354Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
