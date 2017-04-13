import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3194Component } from './comp-3194.component';

describe('Comp3194Component', () => {
  let component: Comp3194Component;
  let fixture: ComponentFixture<Comp3194Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3194Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3194Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
