import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3000Component } from './comp-3000.component';

describe('Comp3000Component', () => {
  let component: Comp3000Component;
  let fixture: ComponentFixture<Comp3000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3000Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
