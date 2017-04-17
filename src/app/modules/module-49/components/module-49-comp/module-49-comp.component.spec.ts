import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module49CompComponent } from './module-49-comp.component';

describe('Module49CompComponent', () => {
  let component: Module49CompComponent;
  let fixture: ComponentFixture<Module49CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module49CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module49CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
