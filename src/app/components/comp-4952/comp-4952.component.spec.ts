import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4952Component } from './comp-4952.component';

describe('Comp4952Component', () => {
  let component: Comp4952Component;
  let fixture: ComponentFixture<Comp4952Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4952Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4952Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
