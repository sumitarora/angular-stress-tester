import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1330Component } from './comp-1330.component';

describe('Comp1330Component', () => {
  let component: Comp1330Component;
  let fixture: ComponentFixture<Comp1330Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1330Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1330Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
