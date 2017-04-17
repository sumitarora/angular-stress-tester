import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module43CompComponent } from './module-43-comp.component';

describe('Module43CompComponent', () => {
  let component: Module43CompComponent;
  let fixture: ComponentFixture<Module43CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module43CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module43CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
