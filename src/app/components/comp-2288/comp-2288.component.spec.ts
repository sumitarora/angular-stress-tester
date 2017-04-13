import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2288Component } from './comp-2288.component';

describe('Comp2288Component', () => {
  let component: Comp2288Component;
  let fixture: ComponentFixture<Comp2288Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2288Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2288Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
