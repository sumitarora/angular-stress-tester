import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4632Component } from './comp-4632.component';

describe('Comp4632Component', () => {
  let component: Comp4632Component;
  let fixture: ComponentFixture<Comp4632Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4632Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4632Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
