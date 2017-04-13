import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4723Component } from './comp-4723.component';

describe('Comp4723Component', () => {
  let component: Comp4723Component;
  let fixture: ComponentFixture<Comp4723Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4723Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4723Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
