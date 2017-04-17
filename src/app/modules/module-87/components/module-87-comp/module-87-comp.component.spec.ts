import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module87CompComponent } from './module-87-comp.component';

describe('Module87CompComponent', () => {
  let component: Module87CompComponent;
  let fixture: ComponentFixture<Module87CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module87CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module87CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
