import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1432Component } from './comp-1432.component';

describe('Comp1432Component', () => {
  let component: Comp1432Component;
  let fixture: ComponentFixture<Comp1432Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1432Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1432Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
