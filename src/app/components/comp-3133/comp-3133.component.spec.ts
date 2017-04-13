import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3133Component } from './comp-3133.component';

describe('Comp3133Component', () => {
  let component: Comp3133Component;
  let fixture: ComponentFixture<Comp3133Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3133Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3133Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
