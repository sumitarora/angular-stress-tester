import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2869Component } from './comp-2869.component';

describe('Comp2869Component', () => {
  let component: Comp2869Component;
  let fixture: ComponentFixture<Comp2869Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2869Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2869Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
