import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module59CompComponent } from './module-59-comp.component';

describe('Module59CompComponent', () => {
  let component: Module59CompComponent;
  let fixture: ComponentFixture<Module59CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module59CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module59CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
