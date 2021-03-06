import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module48CompComponent } from './module-48-comp.component';

describe('Module48CompComponent', () => {
  let component: Module48CompComponent;
  let fixture: ComponentFixture<Module48CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module48CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module48CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
