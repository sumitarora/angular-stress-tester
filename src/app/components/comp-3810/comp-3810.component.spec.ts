import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3810Component } from './comp-3810.component';

describe('Comp3810Component', () => {
  let component: Comp3810Component;
  let fixture: ComponentFixture<Comp3810Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3810Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3810Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
