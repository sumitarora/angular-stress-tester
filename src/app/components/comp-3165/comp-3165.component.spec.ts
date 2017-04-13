import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3165Component } from './comp-3165.component';

describe('Comp3165Component', () => {
  let component: Comp3165Component;
  let fixture: ComponentFixture<Comp3165Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3165Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3165Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
