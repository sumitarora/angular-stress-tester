import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4153Component } from './comp-4153.component';

describe('Comp4153Component', () => {
  let component: Comp4153Component;
  let fixture: ComponentFixture<Comp4153Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4153Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4153Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
