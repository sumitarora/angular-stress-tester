import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4443Component } from './comp-4443.component';

describe('Comp4443Component', () => {
  let component: Comp4443Component;
  let fixture: ComponentFixture<Comp4443Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4443Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4443Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
