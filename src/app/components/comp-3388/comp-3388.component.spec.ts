import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3388Component } from './comp-3388.component';

describe('Comp3388Component', () => {
  let component: Comp3388Component;
  let fixture: ComponentFixture<Comp3388Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3388Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3388Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
