import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2388Component } from './comp-2388.component';

describe('Comp2388Component', () => {
  let component: Comp2388Component;
  let fixture: ComponentFixture<Comp2388Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2388Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2388Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
