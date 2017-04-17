import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module13CompComponent } from './module-13-comp.component';

describe('Module13CompComponent', () => {
  let component: Module13CompComponent;
  let fixture: ComponentFixture<Module13CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module13CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module13CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
