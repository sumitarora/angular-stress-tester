import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4809Component } from './comp-4809.component';

describe('Comp4809Component', () => {
  let component: Comp4809Component;
  let fixture: ComponentFixture<Comp4809Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4809Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4809Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
