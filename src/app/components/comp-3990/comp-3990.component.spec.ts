import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3990Component } from './comp-3990.component';

describe('Comp3990Component', () => {
  let component: Comp3990Component;
  let fixture: ComponentFixture<Comp3990Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3990Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3990Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
