import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4631Component } from './comp-4631.component';

describe('Comp4631Component', () => {
  let component: Comp4631Component;
  let fixture: ComponentFixture<Comp4631Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4631Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4631Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
