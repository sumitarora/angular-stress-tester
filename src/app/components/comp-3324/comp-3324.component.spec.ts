import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3324Component } from './comp-3324.component';

describe('Comp3324Component', () => {
  let component: Comp3324Component;
  let fixture: ComponentFixture<Comp3324Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3324Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3324Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
