import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2135Component } from './comp-2135.component';

describe('Comp2135Component', () => {
  let component: Comp2135Component;
  let fixture: ComponentFixture<Comp2135Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2135Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2135Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
