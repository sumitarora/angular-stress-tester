import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3522Component } from './comp-3522.component';

describe('Comp3522Component', () => {
  let component: Comp3522Component;
  let fixture: ComponentFixture<Comp3522Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3522Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3522Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
