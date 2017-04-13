import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4742Component } from './comp-4742.component';

describe('Comp4742Component', () => {
  let component: Comp4742Component;
  let fixture: ComponentFixture<Comp4742Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4742Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4742Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
