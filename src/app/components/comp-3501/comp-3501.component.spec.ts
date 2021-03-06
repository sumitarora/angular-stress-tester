import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3501Component } from './comp-3501.component';

describe('Comp3501Component', () => {
  let component: Comp3501Component;
  let fixture: ComponentFixture<Comp3501Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3501Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3501Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
