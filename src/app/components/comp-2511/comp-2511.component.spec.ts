import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2511Component } from './comp-2511.component';

describe('Comp2511Component', () => {
  let component: Comp2511Component;
  let fixture: ComponentFixture<Comp2511Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2511Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2511Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
