import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp963Component } from './comp-963.component';

describe('Comp963Component', () => {
  let component: Comp963Component;
  let fixture: ComponentFixture<Comp963Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp963Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp963Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
