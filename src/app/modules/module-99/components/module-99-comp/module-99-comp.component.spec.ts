import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module99CompComponent } from './module-99-comp.component';

describe('Module99CompComponent', () => {
  let component: Module99CompComponent;
  let fixture: ComponentFixture<Module99CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module99CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module99CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
