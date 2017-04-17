import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module11CompComponent } from './module-11-comp.component';

describe('Module11CompComponent', () => {
  let component: Module11CompComponent;
  let fixture: ComponentFixture<Module11CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module11CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module11CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
