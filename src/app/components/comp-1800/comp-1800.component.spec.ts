import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1800Component } from './comp-1800.component';

describe('Comp1800Component', () => {
  let component: Comp1800Component;
  let fixture: ComponentFixture<Comp1800Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1800Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1800Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
