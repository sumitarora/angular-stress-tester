import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3024Component } from './comp-3024.component';

describe('Comp3024Component', () => {
  let component: Comp3024Component;
  let fixture: ComponentFixture<Comp3024Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3024Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
