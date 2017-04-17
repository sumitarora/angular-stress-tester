import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module12CompComponent } from './module-12-comp.component';

describe('Module12CompComponent', () => {
  let component: Module12CompComponent;
  let fixture: ComponentFixture<Module12CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module12CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module12CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
