import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4228Component } from './comp-4228.component';

describe('Comp4228Component', () => {
  let component: Comp4228Component;
  let fixture: ComponentFixture<Comp4228Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4228Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4228Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
