import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module82CompComponent } from './module-82-comp.component';

describe('Module82CompComponent', () => {
  let component: Module82CompComponent;
  let fixture: ComponentFixture<Module82CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module82CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module82CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
