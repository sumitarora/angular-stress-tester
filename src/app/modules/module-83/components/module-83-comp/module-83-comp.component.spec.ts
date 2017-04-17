import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module83CompComponent } from './module-83-comp.component';

describe('Module83CompComponent', () => {
  let component: Module83CompComponent;
  let fixture: ComponentFixture<Module83CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module83CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module83CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
