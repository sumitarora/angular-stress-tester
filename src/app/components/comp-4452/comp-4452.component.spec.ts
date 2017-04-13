import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4452Component } from './comp-4452.component';

describe('Comp4452Component', () => {
  let component: Comp4452Component;
  let fixture: ComponentFixture<Comp4452Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4452Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4452Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
