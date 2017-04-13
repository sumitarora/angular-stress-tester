import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4539Component } from './comp-4539.component';

describe('Comp4539Component', () => {
  let component: Comp4539Component;
  let fixture: ComponentFixture<Comp4539Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4539Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4539Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
