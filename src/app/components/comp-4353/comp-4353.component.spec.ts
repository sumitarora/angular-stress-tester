import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4353Component } from './comp-4353.component';

describe('Comp4353Component', () => {
  let component: Comp4353Component;
  let fixture: ComponentFixture<Comp4353Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4353Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4353Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
