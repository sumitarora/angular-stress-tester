import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2228Component } from './comp-2228.component';

describe('Comp2228Component', () => {
  let component: Comp2228Component;
  let fixture: ComponentFixture<Comp2228Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2228Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2228Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
