import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module5CompComponent } from './module-5-comp.component';

describe('Module5CompComponent', () => {
  let component: Module5CompComponent;
  let fixture: ComponentFixture<Module5CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module5CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module5CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
