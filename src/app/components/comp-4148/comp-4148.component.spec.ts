import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4148Component } from './comp-4148.component';

describe('Comp4148Component', () => {
  let component: Comp4148Component;
  let fixture: ComponentFixture<Comp4148Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4148Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4148Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
