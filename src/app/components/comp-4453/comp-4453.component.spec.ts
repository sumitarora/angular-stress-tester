import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4453Component } from './comp-4453.component';

describe('Comp4453Component', () => {
  let component: Comp4453Component;
  let fixture: ComponentFixture<Comp4453Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4453Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4453Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
