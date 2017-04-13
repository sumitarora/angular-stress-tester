import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3620Component } from './comp-3620.component';

describe('Comp3620Component', () => {
  let component: Comp3620Component;
  let fixture: ComponentFixture<Comp3620Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3620Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3620Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
