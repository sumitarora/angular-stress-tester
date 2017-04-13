import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4104Component } from './comp-4104.component';

describe('Comp4104Component', () => {
  let component: Comp4104Component;
  let fixture: ComponentFixture<Comp4104Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4104Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4104Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
