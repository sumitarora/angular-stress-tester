import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2125Component } from './comp-2125.component';

describe('Comp2125Component', () => {
  let component: Comp2125Component;
  let fixture: ComponentFixture<Comp2125Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2125Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2125Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
