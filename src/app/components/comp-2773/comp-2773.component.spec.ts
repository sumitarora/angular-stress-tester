import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2773Component } from './comp-2773.component';

describe('Comp2773Component', () => {
  let component: Comp2773Component;
  let fixture: ComponentFixture<Comp2773Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2773Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2773Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
