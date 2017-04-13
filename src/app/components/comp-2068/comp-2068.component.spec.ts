import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2068Component } from './comp-2068.component';

describe('Comp2068Component', () => {
  let component: Comp2068Component;
  let fixture: ComponentFixture<Comp2068Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2068Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2068Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
