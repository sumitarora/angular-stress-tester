import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1206Component } from './comp-1206.component';

describe('Comp1206Component', () => {
  let component: Comp1206Component;
  let fixture: ComponentFixture<Comp1206Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1206Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1206Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
