import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module94CompComponent } from './module-94-comp.component';

describe('Module94CompComponent', () => {
  let component: Module94CompComponent;
  let fixture: ComponentFixture<Module94CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module94CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module94CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
