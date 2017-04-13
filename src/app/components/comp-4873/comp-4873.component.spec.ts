import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4873Component } from './comp-4873.component';

describe('Comp4873Component', () => {
  let component: Comp4873Component;
  let fixture: ComponentFixture<Comp4873Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4873Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4873Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
