import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2875Component } from './comp-2875.component';

describe('Comp2875Component', () => {
  let component: Comp2875Component;
  let fixture: ComponentFixture<Comp2875Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2875Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2875Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
