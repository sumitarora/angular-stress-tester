import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3869Component } from './comp-3869.component';

describe('Comp3869Component', () => {
  let component: Comp3869Component;
  let fixture: ComponentFixture<Comp3869Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3869Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3869Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
