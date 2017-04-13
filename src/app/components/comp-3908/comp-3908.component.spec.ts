import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3908Component } from './comp-3908.component';

describe('Comp3908Component', () => {
  let component: Comp3908Component;
  let fixture: ComponentFixture<Comp3908Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3908Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3908Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
