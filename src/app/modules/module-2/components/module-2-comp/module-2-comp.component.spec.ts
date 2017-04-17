import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module2CompComponent } from './module-2-comp.component';

describe('Module2CompComponent', () => {
  let component: Module2CompComponent;
  let fixture: ComponentFixture<Module2CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module2CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module2CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
