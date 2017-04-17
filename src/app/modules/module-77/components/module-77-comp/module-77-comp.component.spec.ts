import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module77CompComponent } from './module-77-comp.component';

describe('Module77CompComponent', () => {
  let component: Module77CompComponent;
  let fixture: ComponentFixture<Module77CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module77CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module77CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
