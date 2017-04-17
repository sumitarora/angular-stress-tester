import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module71CompComponent } from './module-71-comp.component';

describe('Module71CompComponent', () => {
  let component: Module71CompComponent;
  let fixture: ComponentFixture<Module71CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module71CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module71CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
