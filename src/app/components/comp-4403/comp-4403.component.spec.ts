import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4403Component } from './comp-4403.component';

describe('Comp4403Component', () => {
  let component: Comp4403Component;
  let fixture: ComponentFixture<Comp4403Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4403Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4403Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
