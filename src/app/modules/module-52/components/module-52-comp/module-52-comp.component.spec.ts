import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module52CompComponent } from './module-52-comp.component';

describe('Module52CompComponent', () => {
  let component: Module52CompComponent;
  let fixture: ComponentFixture<Module52CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module52CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module52CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
