import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2381Component } from './comp-2381.component';

describe('Comp2381Component', () => {
  let component: Comp2381Component;
  let fixture: ComponentFixture<Comp2381Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2381Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2381Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
