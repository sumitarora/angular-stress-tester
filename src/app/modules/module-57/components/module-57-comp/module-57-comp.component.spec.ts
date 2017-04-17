import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module57CompComponent } from './module-57-comp.component';

describe('Module57CompComponent', () => {
  let component: Module57CompComponent;
  let fixture: ComponentFixture<Module57CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module57CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module57CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
