import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module26CompComponent } from './module-26-comp.component';

describe('Module26CompComponent', () => {
  let component: Module26CompComponent;
  let fixture: ComponentFixture<Module26CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module26CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module26CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
