import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3737Component } from './comp-3737.component';

describe('Comp3737Component', () => {
  let component: Comp3737Component;
  let fixture: ComponentFixture<Comp3737Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3737Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3737Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
