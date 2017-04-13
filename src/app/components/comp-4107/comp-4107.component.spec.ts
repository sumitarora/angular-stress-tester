import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4107Component } from './comp-4107.component';

describe('Comp4107Component', () => {
  let component: Comp4107Component;
  let fixture: ComponentFixture<Comp4107Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4107Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4107Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
