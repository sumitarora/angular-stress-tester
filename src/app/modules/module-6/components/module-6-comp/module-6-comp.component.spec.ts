import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module6CompComponent } from './module-6-comp.component';

describe('Module6CompComponent', () => {
  let component: Module6CompComponent;
  let fixture: ComponentFixture<Module6CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module6CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module6CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
