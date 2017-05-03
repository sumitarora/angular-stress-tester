import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp490Component } from './comp-490.component';
import { Service490Service } from '../../services/service-490.service';

describe('Comp490Component', () => {
  let component: Comp490Component;
  let fixture: ComponentFixture<Comp490Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp490Component ],
providers: [Service490Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp490Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
