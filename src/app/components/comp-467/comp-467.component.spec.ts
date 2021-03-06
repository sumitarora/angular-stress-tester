import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp467Component } from './comp-467.component';

describe('Comp467Component', () => {
  let component: Comp467Component;
  let fixture: ComponentFixture<Comp467Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp467Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp467Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
