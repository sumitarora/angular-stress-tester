import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2249Component } from './comp-2249.component';

describe('Comp2249Component', () => {
  let component: Comp2249Component;
  let fixture: ComponentFixture<Comp2249Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2249Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2249Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
