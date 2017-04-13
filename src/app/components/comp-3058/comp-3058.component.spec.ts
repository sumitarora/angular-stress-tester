import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3058Component } from './comp-3058.component';

describe('Comp3058Component', () => {
  let component: Comp3058Component;
  let fixture: ComponentFixture<Comp3058Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3058Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3058Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
