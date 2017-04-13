import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2788Component } from './comp-2788.component';

describe('Comp2788Component', () => {
  let component: Comp2788Component;
  let fixture: ComponentFixture<Comp2788Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2788Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2788Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
