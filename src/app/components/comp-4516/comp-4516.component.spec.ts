import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4516Component } from './comp-4516.component';

describe('Comp4516Component', () => {
  let component: Comp4516Component;
  let fixture: ComponentFixture<Comp4516Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4516Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4516Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
