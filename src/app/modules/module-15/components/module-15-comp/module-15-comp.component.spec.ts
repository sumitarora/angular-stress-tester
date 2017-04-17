import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module15CompComponent } from './module-15-comp.component';

describe('Module15CompComponent', () => {
  let component: Module15CompComponent;
  let fixture: ComponentFixture<Module15CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module15CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module15CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
