import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4336Component } from './comp-4336.component';

describe('Comp4336Component', () => {
  let component: Comp4336Component;
  let fixture: ComponentFixture<Comp4336Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4336Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4336Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
