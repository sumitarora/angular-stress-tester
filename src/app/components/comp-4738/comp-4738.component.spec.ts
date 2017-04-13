import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4738Component } from './comp-4738.component';

describe('Comp4738Component', () => {
  let component: Comp4738Component;
  let fixture: ComponentFixture<Comp4738Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4738Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4738Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
