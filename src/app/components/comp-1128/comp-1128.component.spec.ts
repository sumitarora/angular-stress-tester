import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1128Component } from './comp-1128.component';

describe('Comp1128Component', () => {
  let component: Comp1128Component;
  let fixture: ComponentFixture<Comp1128Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1128Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1128Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
