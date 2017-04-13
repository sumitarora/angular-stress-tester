import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4347Component } from './comp-4347.component';

describe('Comp4347Component', () => {
  let component: Comp4347Component;
  let fixture: ComponentFixture<Comp4347Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4347Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4347Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
