import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1303Component } from './comp-1303.component';

describe('Comp1303Component', () => {
  let component: Comp1303Component;
  let fixture: ComponentFixture<Comp1303Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1303Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1303Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
