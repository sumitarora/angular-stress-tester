import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3401Component } from './comp-3401.component';

describe('Comp3401Component', () => {
  let component: Comp3401Component;
  let fixture: ComponentFixture<Comp3401Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3401Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3401Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
