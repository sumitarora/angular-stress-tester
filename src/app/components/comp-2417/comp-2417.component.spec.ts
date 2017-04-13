import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2417Component } from './comp-2417.component';

describe('Comp2417Component', () => {
  let component: Comp2417Component;
  let fixture: ComponentFixture<Comp2417Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2417Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2417Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
