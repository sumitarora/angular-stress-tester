import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4701Component } from './comp-4701.component';

describe('Comp4701Component', () => {
  let component: Comp4701Component;
  let fixture: ComponentFixture<Comp4701Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4701Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4701Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
