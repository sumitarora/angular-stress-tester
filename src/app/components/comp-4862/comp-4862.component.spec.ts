import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4862Component } from './comp-4862.component';

describe('Comp4862Component', () => {
  let component: Comp4862Component;
  let fixture: ComponentFixture<Comp4862Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4862Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4862Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
