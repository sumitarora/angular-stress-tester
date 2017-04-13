import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3629Component } from './comp-3629.component';

describe('Comp3629Component', () => {
  let component: Comp3629Component;
  let fixture: ComponentFixture<Comp3629Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3629Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3629Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
