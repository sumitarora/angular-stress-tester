import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4748Component } from './comp-4748.component';

describe('Comp4748Component', () => {
  let component: Comp4748Component;
  let fixture: ComponentFixture<Comp4748Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4748Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4748Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
