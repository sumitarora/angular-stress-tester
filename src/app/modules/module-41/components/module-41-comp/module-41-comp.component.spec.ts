import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module41CompComponent } from './module-41-comp.component';

describe('Module41CompComponent', () => {
  let component: Module41CompComponent;
  let fixture: ComponentFixture<Module41CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module41CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module41CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
