import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4586Component } from './comp-4586.component';

describe('Comp4586Component', () => {
  let component: Comp4586Component;
  let fixture: ComponentFixture<Comp4586Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4586Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4586Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
