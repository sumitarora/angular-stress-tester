import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3125Component } from './comp-3125.component';

describe('Comp3125Component', () => {
  let component: Comp3125Component;
  let fixture: ComponentFixture<Comp3125Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3125Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3125Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
