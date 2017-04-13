import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3823Component } from './comp-3823.component';

describe('Comp3823Component', () => {
  let component: Comp3823Component;
  let fixture: ComponentFixture<Comp3823Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3823Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3823Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
