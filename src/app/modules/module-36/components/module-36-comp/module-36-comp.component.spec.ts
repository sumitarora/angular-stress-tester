import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module36CompComponent } from './module-36-comp.component';

describe('Module36CompComponent', () => {
  let component: Module36CompComponent;
  let fixture: ComponentFixture<Module36CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module36CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module36CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
