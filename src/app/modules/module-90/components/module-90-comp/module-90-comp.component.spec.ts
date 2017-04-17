import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module90CompComponent } from './module-90-comp.component';

describe('Module90CompComponent', () => {
  let component: Module90CompComponent;
  let fixture: ComponentFixture<Module90CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module90CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module90CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
