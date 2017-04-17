import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module19CompComponent } from './module-19-comp.component';

describe('Module19CompComponent', () => {
  let component: Module19CompComponent;
  let fixture: ComponentFixture<Module19CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module19CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module19CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
