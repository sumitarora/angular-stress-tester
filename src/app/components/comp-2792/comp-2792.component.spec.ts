import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2792Component } from './comp-2792.component';

describe('Comp2792Component', () => {
  let component: Comp2792Component;
  let fixture: ComponentFixture<Comp2792Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2792Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2792Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
