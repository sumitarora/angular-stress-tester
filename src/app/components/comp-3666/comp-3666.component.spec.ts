import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3666Component } from './comp-3666.component';

describe('Comp3666Component', () => {
  let component: Comp3666Component;
  let fixture: ComponentFixture<Comp3666Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3666Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3666Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
