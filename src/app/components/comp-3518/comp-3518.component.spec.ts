import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3518Component } from './comp-3518.component';

describe('Comp3518Component', () => {
  let component: Comp3518Component;
  let fixture: ComponentFixture<Comp3518Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3518Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3518Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
