import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp964Component } from './comp-964.component';
import { Service964Service } from '../../services/service-964.service';

describe('Comp964Component', () => {
  let component: Comp964Component;
  let fixture: ComponentFixture<Comp964Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp964Component ],
providers: [Service964Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp964Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
