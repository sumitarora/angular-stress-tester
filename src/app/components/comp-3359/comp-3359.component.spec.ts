import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3359Component } from './comp-3359.component';

describe('Comp3359Component', () => {
  let component: Comp3359Component;
  let fixture: ComponentFixture<Comp3359Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3359Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3359Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
