import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4845Component } from './comp-4845.component';

describe('Comp4845Component', () => {
  let component: Comp4845Component;
  let fixture: ComponentFixture<Comp4845Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4845Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4845Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
