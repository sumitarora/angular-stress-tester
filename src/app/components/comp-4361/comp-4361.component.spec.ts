import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4361Component } from './comp-4361.component';

describe('Comp4361Component', () => {
  let component: Comp4361Component;
  let fixture: ComponentFixture<Comp4361Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4361Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4361Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
