import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module100CompComponent } from './module-100-comp.component';

describe('Module100CompComponent', () => {
  let component: Module100CompComponent;
  let fixture: ComponentFixture<Module100CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module100CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module100CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
