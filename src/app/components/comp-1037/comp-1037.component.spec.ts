import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1037Component } from './comp-1037.component';

describe('Comp1037Component', () => {
  let component: Comp1037Component;
  let fixture: ComponentFixture<Comp1037Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1037Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1037Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
