import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3428Component } from './comp-3428.component';

describe('Comp3428Component', () => {
  let component: Comp3428Component;
  let fixture: ComponentFixture<Comp3428Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3428Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3428Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
