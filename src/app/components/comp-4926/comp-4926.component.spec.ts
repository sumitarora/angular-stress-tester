import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4926Component } from './comp-4926.component';

describe('Comp4926Component', () => {
  let component: Comp4926Component;
  let fixture: ComponentFixture<Comp4926Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4926Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4926Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
