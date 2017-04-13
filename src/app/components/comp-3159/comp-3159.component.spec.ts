import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3159Component } from './comp-3159.component';

describe('Comp3159Component', () => {
  let component: Comp3159Component;
  let fixture: ComponentFixture<Comp3159Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3159Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3159Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
