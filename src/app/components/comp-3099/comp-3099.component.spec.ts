import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3099Component } from './comp-3099.component';

describe('Comp3099Component', () => {
  let component: Comp3099Component;
  let fixture: ComponentFixture<Comp3099Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3099Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3099Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
