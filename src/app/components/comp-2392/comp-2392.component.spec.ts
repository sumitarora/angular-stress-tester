import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2392Component } from './comp-2392.component';

describe('Comp2392Component', () => {
  let component: Comp2392Component;
  let fixture: ComponentFixture<Comp2392Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2392Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2392Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
