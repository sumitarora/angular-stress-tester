import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3148Component } from './comp-3148.component';

describe('Comp3148Component', () => {
  let component: Comp3148Component;
  let fixture: ComponentFixture<Comp3148Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3148Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3148Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
