import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4885Component } from './comp-4885.component';

describe('Comp4885Component', () => {
  let component: Comp4885Component;
  let fixture: ComponentFixture<Comp4885Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4885Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4885Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
