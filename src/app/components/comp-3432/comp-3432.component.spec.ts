import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3432Component } from './comp-3432.component';

describe('Comp3432Component', () => {
  let component: Comp3432Component;
  let fixture: ComponentFixture<Comp3432Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3432Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3432Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
