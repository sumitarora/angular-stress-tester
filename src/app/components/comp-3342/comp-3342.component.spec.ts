import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3342Component } from './comp-3342.component';

describe('Comp3342Component', () => {
  let component: Comp3342Component;
  let fixture: ComponentFixture<Comp3342Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3342Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3342Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
