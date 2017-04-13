import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2073Component } from './comp-2073.component';

describe('Comp2073Component', () => {
  let component: Comp2073Component;
  let fixture: ComponentFixture<Comp2073Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2073Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2073Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
