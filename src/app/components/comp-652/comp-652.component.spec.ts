import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp652Component } from './comp-652.component';

describe('Comp652Component', () => {
  let component: Comp652Component;
  let fixture: ComponentFixture<Comp652Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp652Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp652Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
