import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp34Component } from './comp-34.component';

describe('Comp34Component', () => {
  let component: Comp34Component;
  let fixture: ComponentFixture<Comp34Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp34Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
