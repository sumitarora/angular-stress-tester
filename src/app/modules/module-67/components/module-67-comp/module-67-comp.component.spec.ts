import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module67CompComponent } from './module-67-comp.component';

describe('Module67CompComponent', () => {
  let component: Module67CompComponent;
  let fixture: ComponentFixture<Module67CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module67CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module67CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
