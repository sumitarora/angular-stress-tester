import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2439Component } from './comp-2439.component';

describe('Comp2439Component', () => {
  let component: Comp2439Component;
  let fixture: ComponentFixture<Comp2439Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2439Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2439Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
