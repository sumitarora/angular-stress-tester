import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4923Component } from './comp-4923.component';

describe('Comp4923Component', () => {
  let component: Comp4923Component;
  let fixture: ComponentFixture<Comp4923Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4923Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4923Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
