import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3079Component } from './comp-3079.component';

describe('Comp3079Component', () => {
  let component: Comp3079Component;
  let fixture: ComponentFixture<Comp3079Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3079Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3079Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
