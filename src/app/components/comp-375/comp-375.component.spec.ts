import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp375Component } from './comp-375.component';

describe('Comp375Component', () => {
  let component: Comp375Component;
  let fixture: ComponentFixture<Comp375Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp375Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp375Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
