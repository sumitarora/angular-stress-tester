import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3068Component } from './comp-3068.component';

describe('Comp3068Component', () => {
  let component: Comp3068Component;
  let fixture: ComponentFixture<Comp3068Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3068Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3068Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
