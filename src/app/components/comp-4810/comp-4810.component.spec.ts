import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4810Component } from './comp-4810.component';

describe('Comp4810Component', () => {
  let component: Comp4810Component;
  let fixture: ComponentFixture<Comp4810Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4810Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4810Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
