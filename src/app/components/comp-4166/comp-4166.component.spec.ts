import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4166Component } from './comp-4166.component';

describe('Comp4166Component', () => {
  let component: Comp4166Component;
  let fixture: ComponentFixture<Comp4166Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4166Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4166Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
