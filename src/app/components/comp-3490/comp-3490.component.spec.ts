import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3490Component } from './comp-3490.component';

describe('Comp3490Component', () => {
  let component: Comp3490Component;
  let fixture: ComponentFixture<Comp3490Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3490Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3490Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
