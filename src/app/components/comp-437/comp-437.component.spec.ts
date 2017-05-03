import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp437Component } from './comp-437.component';
import { Service437Service } from '../../services/service-437.service';

describe('Comp437Component', () => {
  let component: Comp437Component;
  let fixture: ComponentFixture<Comp437Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp437Component ],
providers: [Service437Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp437Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
