import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp896Component } from './comp-896.component';

describe('Comp896Component', () => {
  let component: Comp896Component;
  let fixture: ComponentFixture<Comp896Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp896Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp896Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
