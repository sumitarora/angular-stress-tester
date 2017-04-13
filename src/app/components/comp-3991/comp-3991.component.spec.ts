import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3991Component } from './comp-3991.component';

describe('Comp3991Component', () => {
  let component: Comp3991Component;
  let fixture: ComponentFixture<Comp3991Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3991Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3991Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
