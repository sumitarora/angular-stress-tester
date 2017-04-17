import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module18CompComponent } from './module-18-comp.component';

describe('Module18CompComponent', () => {
  let component: Module18CompComponent;
  let fixture: ComponentFixture<Module18CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module18CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module18CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
