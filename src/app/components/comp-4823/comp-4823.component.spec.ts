import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4823Component } from './comp-4823.component';

describe('Comp4823Component', () => {
  let component: Comp4823Component;
  let fixture: ComponentFixture<Comp4823Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4823Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4823Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
