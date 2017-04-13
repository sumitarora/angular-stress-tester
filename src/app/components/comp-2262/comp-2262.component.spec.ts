import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2262Component } from './comp-2262.component';

describe('Comp2262Component', () => {
  let component: Comp2262Component;
  let fixture: ComponentFixture<Comp2262Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2262Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2262Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
