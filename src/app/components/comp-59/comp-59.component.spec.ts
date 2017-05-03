import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp59Component } from './comp-59.component';
import { Service59Service } from '../../services/service-59.service';

describe('Comp59Component', () => {
  let component: Comp59Component;
  let fixture: ComponentFixture<Comp59Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp59Component ],
providers: [Service59Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp59Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
