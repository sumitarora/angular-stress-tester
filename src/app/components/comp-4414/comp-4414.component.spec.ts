import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4414Component } from './comp-4414.component';

describe('Comp4414Component', () => {
  let component: Comp4414Component;
  let fixture: ComponentFixture<Comp4414Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4414Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4414Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
