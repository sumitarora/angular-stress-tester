import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3228Component } from './comp-3228.component';

describe('Comp3228Component', () => {
  let component: Comp3228Component;
  let fixture: ComponentFixture<Comp3228Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3228Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3228Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
