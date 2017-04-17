import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module20CompComponent } from './module-20-comp.component';

describe('Module20CompComponent', () => {
  let component: Module20CompComponent;
  let fixture: ComponentFixture<Module20CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module20CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module20CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
