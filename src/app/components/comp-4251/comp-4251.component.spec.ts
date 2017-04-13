import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4251Component } from './comp-4251.component';

describe('Comp4251Component', () => {
  let component: Comp4251Component;
  let fixture: ComponentFixture<Comp4251Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4251Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4251Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
