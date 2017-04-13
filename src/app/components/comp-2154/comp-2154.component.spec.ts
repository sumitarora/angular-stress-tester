import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2154Component } from './comp-2154.component';

describe('Comp2154Component', () => {
  let component: Comp2154Component;
  let fixture: ComponentFixture<Comp2154Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2154Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2154Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
