import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1148Component } from './comp-1148.component';

describe('Comp1148Component', () => {
  let component: Comp1148Component;
  let fixture: ComponentFixture<Comp1148Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1148Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1148Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
