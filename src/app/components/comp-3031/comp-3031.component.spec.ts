import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3031Component } from './comp-3031.component';

describe('Comp3031Component', () => {
  let component: Comp3031Component;
  let fixture: ComponentFixture<Comp3031Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3031Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3031Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
