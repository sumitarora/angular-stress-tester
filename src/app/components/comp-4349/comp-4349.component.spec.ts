import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4349Component } from './comp-4349.component';

describe('Comp4349Component', () => {
  let component: Comp4349Component;
  let fixture: ComponentFixture<Comp4349Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4349Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4349Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
