import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3212Component } from './comp-3212.component';

describe('Comp3212Component', () => {
  let component: Comp3212Component;
  let fixture: ComponentFixture<Comp3212Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3212Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3212Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
