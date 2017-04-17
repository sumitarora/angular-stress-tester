import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module23CompComponent } from './module-23-comp.component';

describe('Module23CompComponent', () => {
  let component: Module23CompComponent;
  let fixture: ComponentFixture<Module23CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module23CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module23CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
