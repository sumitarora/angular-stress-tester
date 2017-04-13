import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp5000Component } from './comp-5000.component';

describe('Comp5000Component', () => {
  let component: Comp5000Component;
  let fixture: ComponentFixture<Comp5000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp5000Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp5000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
