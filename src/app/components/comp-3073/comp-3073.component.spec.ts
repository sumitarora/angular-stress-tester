import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3073Component } from './comp-3073.component';

describe('Comp3073Component', () => {
  let component: Comp3073Component;
  let fixture: ComponentFixture<Comp3073Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3073Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3073Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
