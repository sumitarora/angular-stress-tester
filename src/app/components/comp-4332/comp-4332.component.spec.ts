import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4332Component } from './comp-4332.component';

describe('Comp4332Component', () => {
  let component: Comp4332Component;
  let fixture: ComponentFixture<Comp4332Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4332Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4332Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
