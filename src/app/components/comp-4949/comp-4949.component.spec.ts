import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4949Component } from './comp-4949.component';

describe('Comp4949Component', () => {
  let component: Comp4949Component;
  let fixture: ComponentFixture<Comp4949Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4949Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4949Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
