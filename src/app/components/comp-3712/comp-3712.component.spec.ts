import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3712Component } from './comp-3712.component';

describe('Comp3712Component', () => {
  let component: Comp3712Component;
  let fixture: ComponentFixture<Comp3712Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3712Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3712Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
