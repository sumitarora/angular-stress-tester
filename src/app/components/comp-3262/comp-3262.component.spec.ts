import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3262Component } from './comp-3262.component';

describe('Comp3262Component', () => {
  let component: Comp3262Component;
  let fixture: ComponentFixture<Comp3262Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3262Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3262Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
