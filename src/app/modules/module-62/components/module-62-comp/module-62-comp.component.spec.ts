import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module62CompComponent } from './module-62-comp.component';

describe('Module62CompComponent', () => {
  let component: Module62CompComponent;
  let fixture: ComponentFixture<Module62CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module62CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module62CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
