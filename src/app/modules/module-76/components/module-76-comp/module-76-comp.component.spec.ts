import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module76CompComponent } from './module-76-comp.component';

describe('Module76CompComponent', () => {
  let component: Module76CompComponent;
  let fixture: ComponentFixture<Module76CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module76CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module76CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
