import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4531Component } from './comp-4531.component';

describe('Comp4531Component', () => {
  let component: Comp4531Component;
  let fixture: ComponentFixture<Comp4531Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4531Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4531Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
