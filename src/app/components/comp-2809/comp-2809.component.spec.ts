import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2809Component } from './comp-2809.component';

describe('Comp2809Component', () => {
  let component: Comp2809Component;
  let fixture: ComponentFixture<Comp2809Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2809Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2809Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
