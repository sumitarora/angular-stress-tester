import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2908Component } from './comp-2908.component';

describe('Comp2908Component', () => {
  let component: Comp2908Component;
  let fixture: ComponentFixture<Comp2908Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2908Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2908Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
