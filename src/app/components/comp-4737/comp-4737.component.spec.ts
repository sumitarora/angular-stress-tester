import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4737Component } from './comp-4737.component';

describe('Comp4737Component', () => {
  let component: Comp4737Component;
  let fixture: ComponentFixture<Comp4737Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4737Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4737Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
