import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp808Component } from './comp-808.component';

describe('Comp808Component', () => {
  let component: Comp808Component;
  let fixture: ComponentFixture<Comp808Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp808Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp808Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
