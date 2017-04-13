import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3406Component } from './comp-3406.component';

describe('Comp3406Component', () => {
  let component: Comp3406Component;
  let fixture: ComponentFixture<Comp3406Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3406Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3406Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
