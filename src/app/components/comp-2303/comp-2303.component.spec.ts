import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2303Component } from './comp-2303.component';

describe('Comp2303Component', () => {
  let component: Comp2303Component;
  let fixture: ComponentFixture<Comp2303Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2303Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2303Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
