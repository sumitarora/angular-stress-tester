import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4690Component } from './comp-4690.component';

describe('Comp4690Component', () => {
  let component: Comp4690Component;
  let fixture: ComponentFixture<Comp4690Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4690Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4690Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
