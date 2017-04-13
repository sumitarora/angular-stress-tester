import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3970Component } from './comp-3970.component';

describe('Comp3970Component', () => {
  let component: Comp3970Component;
  let fixture: ComponentFixture<Comp3970Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3970Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3970Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
