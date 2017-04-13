import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3337Component } from './comp-3337.component';

describe('Comp3337Component', () => {
  let component: Comp3337Component;
  let fixture: ComponentFixture<Comp3337Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3337Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3337Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
