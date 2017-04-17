import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module85CompComponent } from './module-85-comp.component';

describe('Module85CompComponent', () => {
  let component: Module85CompComponent;
  let fixture: ComponentFixture<Module85CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module85CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module85CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
