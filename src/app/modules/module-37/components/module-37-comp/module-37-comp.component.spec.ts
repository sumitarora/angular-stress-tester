import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module37CompComponent } from './module-37-comp.component';

describe('Module37CompComponent', () => {
  let component: Module37CompComponent;
  let fixture: ComponentFixture<Module37CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module37CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module37CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
