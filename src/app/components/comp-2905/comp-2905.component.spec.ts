import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2905Component } from './comp-2905.component';

describe('Comp2905Component', () => {
  let component: Comp2905Component;
  let fixture: ComponentFixture<Comp2905Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2905Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2905Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
