import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3439Component } from './comp-3439.component';

describe('Comp3439Component', () => {
  let component: Comp3439Component;
  let fixture: ComponentFixture<Comp3439Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3439Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3439Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
