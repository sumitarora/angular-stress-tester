import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4997Component } from './comp-4997.component';

describe('Comp4997Component', () => {
  let component: Comp4997Component;
  let fixture: ComponentFixture<Comp4997Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4997Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4997Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
