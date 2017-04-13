import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3092Component } from './comp-3092.component';

describe('Comp3092Component', () => {
  let component: Comp3092Component;
  let fixture: ComponentFixture<Comp3092Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3092Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3092Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
