import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3885Component } from './comp-3885.component';

describe('Comp3885Component', () => {
  let component: Comp3885Component;
  let fixture: ComponentFixture<Comp3885Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3885Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3885Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});