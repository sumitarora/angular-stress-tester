import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module93CompComponent } from './module-93-comp.component';

describe('Module93CompComponent', () => {
  let component: Module93CompComponent;
  let fixture: ComponentFixture<Module93CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module93CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module93CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
