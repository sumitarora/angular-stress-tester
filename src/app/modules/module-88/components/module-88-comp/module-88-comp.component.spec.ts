import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module88CompComponent } from './module-88-comp.component';

describe('Module88CompComponent', () => {
  let component: Module88CompComponent;
  let fixture: ComponentFixture<Module88CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module88CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module88CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
