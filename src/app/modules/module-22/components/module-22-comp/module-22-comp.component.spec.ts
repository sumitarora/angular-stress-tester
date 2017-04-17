import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module22CompComponent } from './module-22-comp.component';

describe('Module22CompComponent', () => {
  let component: Module22CompComponent;
  let fixture: ComponentFixture<Module22CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module22CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module22CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
