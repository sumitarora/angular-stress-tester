import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3841Component } from './comp-3841.component';

describe('Comp3841Component', () => {
  let component: Comp3841Component;
  let fixture: ComponentFixture<Comp3841Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3841Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3841Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
