import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4522Component } from './comp-4522.component';

describe('Comp4522Component', () => {
  let component: Comp4522Component;
  let fixture: ComponentFixture<Comp4522Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4522Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4522Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
