import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4528Component } from './comp-4528.component';

describe('Comp4528Component', () => {
  let component: Comp4528Component;
  let fixture: ComponentFixture<Comp4528Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4528Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4528Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
