import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2931Component } from './comp-2931.component';

describe('Comp2931Component', () => {
  let component: Comp2931Component;
  let fixture: ComponentFixture<Comp2931Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2931Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2931Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
