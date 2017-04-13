import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3858Component } from './comp-3858.component';

describe('Comp3858Component', () => {
  let component: Comp3858Component;
  let fixture: ComponentFixture<Comp3858Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3858Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3858Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
