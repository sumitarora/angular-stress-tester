import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4944Component } from './comp-4944.component';

describe('Comp4944Component', () => {
  let component: Comp4944Component;
  let fixture: ComponentFixture<Comp4944Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4944Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4944Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
