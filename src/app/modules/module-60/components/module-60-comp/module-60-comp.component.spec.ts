import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module60CompComponent } from './module-60-comp.component';

describe('Module60CompComponent', () => {
  let component: Module60CompComponent;
  let fixture: ComponentFixture<Module60CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module60CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module60CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
