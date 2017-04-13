import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2714Component } from './comp-2714.component';

describe('Comp2714Component', () => {
  let component: Comp2714Component;
  let fixture: ComponentFixture<Comp2714Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2714Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2714Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
