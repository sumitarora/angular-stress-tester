import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2819Component } from './comp-2819.component';

describe('Comp2819Component', () => {
  let component: Comp2819Component;
  let fixture: ComponentFixture<Comp2819Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2819Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2819Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
