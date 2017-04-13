import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4444Component } from './comp-4444.component';

describe('Comp4444Component', () => {
  let component: Comp4444Component;
  let fixture: ComponentFixture<Comp4444Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4444Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4444Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
