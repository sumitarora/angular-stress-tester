import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4305Component } from './comp-4305.component';

describe('Comp4305Component', () => {
  let component: Comp4305Component;
  let fixture: ComponentFixture<Comp4305Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4305Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4305Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
