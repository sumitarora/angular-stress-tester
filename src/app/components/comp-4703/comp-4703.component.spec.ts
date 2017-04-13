import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4703Component } from './comp-4703.component';

describe('Comp4703Component', () => {
  let component: Comp4703Component;
  let fixture: ComponentFixture<Comp4703Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4703Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4703Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
