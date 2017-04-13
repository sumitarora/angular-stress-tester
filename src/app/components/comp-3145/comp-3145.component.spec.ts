import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3145Component } from './comp-3145.component';

describe('Comp3145Component', () => {
  let component: Comp3145Component;
  let fixture: ComponentFixture<Comp3145Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3145Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3145Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
