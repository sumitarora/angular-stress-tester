import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp843Component } from './comp-843.component';
import { Service843Service } from '../../services/service-843.service';

describe('Comp843Component', () => {
  let component: Comp843Component;
  let fixture: ComponentFixture<Comp843Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp843Component ],
providers: [Service843Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp843Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
