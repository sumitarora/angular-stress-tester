import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4850Component } from './comp-4850.component';

describe('Comp4850Component', () => {
  let component: Comp4850Component;
  let fixture: ComponentFixture<Comp4850Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4850Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4850Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
