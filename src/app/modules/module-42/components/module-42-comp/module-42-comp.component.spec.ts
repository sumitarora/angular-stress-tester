import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module42CompComponent } from './module-42-comp.component';

describe('Module42CompComponent', () => {
  let component: Module42CompComponent;
  let fixture: ComponentFixture<Module42CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module42CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module42CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
