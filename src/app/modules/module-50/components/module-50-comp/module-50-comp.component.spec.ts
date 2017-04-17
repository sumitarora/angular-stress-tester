import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module50CompComponent } from './module-50-comp.component';

describe('Module50CompComponent', () => {
  let component: Module50CompComponent;
  let fixture: ComponentFixture<Module50CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module50CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module50CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
