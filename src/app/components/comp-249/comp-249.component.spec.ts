import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp249Component } from './comp-249.component';

describe('Comp249Component', () => {
  let component: Comp249Component;
  let fixture: ComponentFixture<Comp249Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp249Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp249Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
