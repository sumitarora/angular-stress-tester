import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module9CompComponent } from './module-9-comp.component';

describe('Module9CompComponent', () => {
  let component: Module9CompComponent;
  let fixture: ComponentFixture<Module9CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module9CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module9CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
