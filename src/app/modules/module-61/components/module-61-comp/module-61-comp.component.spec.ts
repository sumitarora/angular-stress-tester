import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module61CompComponent } from './module-61-comp.component';

describe('Module61CompComponent', () => {
  let component: Module61CompComponent;
  let fixture: ComponentFixture<Module61CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module61CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module61CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
