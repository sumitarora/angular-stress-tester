import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2142Component } from './comp-2142.component';

describe('Comp2142Component', () => {
  let component: Comp2142Component;
  let fixture: ComponentFixture<Comp2142Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2142Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2142Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
