import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4589Component } from './comp-4589.component';

describe('Comp4589Component', () => {
  let component: Comp4589Component;
  let fixture: ComponentFixture<Comp4589Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4589Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4589Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
