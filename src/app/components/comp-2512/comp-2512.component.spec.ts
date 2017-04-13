import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2512Component } from './comp-2512.component';

describe('Comp2512Component', () => {
  let component: Comp2512Component;
  let fixture: ComponentFixture<Comp2512Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2512Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2512Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
