import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4578Component } from './comp-4578.component';

describe('Comp4578Component', () => {
  let component: Comp4578Component;
  let fixture: ComponentFixture<Comp4578Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4578Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4578Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
