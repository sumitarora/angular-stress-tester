import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3259Component } from './comp-3259.component';

describe('Comp3259Component', () => {
  let component: Comp3259Component;
  let fixture: ComponentFixture<Comp3259Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3259Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3259Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
