import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3873Component } from './comp-3873.component';

describe('Comp3873Component', () => {
  let component: Comp3873Component;
  let fixture: ComponentFixture<Comp3873Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3873Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3873Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
