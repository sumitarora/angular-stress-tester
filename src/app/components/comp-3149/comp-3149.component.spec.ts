import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3149Component } from './comp-3149.component';

describe('Comp3149Component', () => {
  let component: Comp3149Component;
  let fixture: ComponentFixture<Comp3149Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3149Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3149Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
