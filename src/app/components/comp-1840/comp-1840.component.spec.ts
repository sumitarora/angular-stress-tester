import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1840Component } from './comp-1840.component';

describe('Comp1840Component', () => {
  let component: Comp1840Component;
  let fixture: ComponentFixture<Comp1840Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1840Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1840Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
