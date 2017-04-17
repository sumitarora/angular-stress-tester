import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module8CompComponent } from './module-8-comp.component';

describe('Module8CompComponent', () => {
  let component: Module8CompComponent;
  let fixture: ComponentFixture<Module8CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module8CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module8CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
