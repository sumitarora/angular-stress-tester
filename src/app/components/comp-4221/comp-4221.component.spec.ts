import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4221Component } from './comp-4221.component';

describe('Comp4221Component', () => {
  let component: Comp4221Component;
  let fixture: ComponentFixture<Comp4221Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4221Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4221Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
