import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1274Component } from './comp-1274.component';

describe('Comp1274Component', () => {
  let component: Comp1274Component;
  let fixture: ComponentFixture<Comp1274Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1274Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1274Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
