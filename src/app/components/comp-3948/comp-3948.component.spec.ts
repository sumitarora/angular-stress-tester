import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3948Component } from './comp-3948.component';

describe('Comp3948Component', () => {
  let component: Comp3948Component;
  let fixture: ComponentFixture<Comp3948Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3948Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3948Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
