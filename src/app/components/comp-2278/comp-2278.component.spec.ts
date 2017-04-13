import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2278Component } from './comp-2278.component';

describe('Comp2278Component', () => {
  let component: Comp2278Component;
  let fixture: ComponentFixture<Comp2278Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2278Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2278Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
