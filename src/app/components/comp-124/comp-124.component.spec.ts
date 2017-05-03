import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp124Component } from './comp-124.component';
import { Service124Service } from '../../services/service-124.service';

describe('Comp124Component', () => {
  let component: Comp124Component;
  let fixture: ComponentFixture<Comp124Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp124Component ],
providers: [Service124Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp124Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
