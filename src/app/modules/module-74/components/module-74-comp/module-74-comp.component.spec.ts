import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module74CompComponent } from './module-74-comp.component';

describe('Module74CompComponent', () => {
  let component: Module74CompComponent;
  let fixture: ComponentFixture<Module74CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module74CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module74CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
