import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3916Component } from './comp-3916.component';

describe('Comp3916Component', () => {
  let component: Comp3916Component;
  let fixture: ComponentFixture<Comp3916Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3916Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3916Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
