import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp998Component } from './comp-998.component';
import { Service998Service } from '../../services/service-998.service';

describe('Comp998Component', () => {
  let component: Comp998Component;
  let fixture: ComponentFixture<Comp998Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp998Component ],
providers: [Service998Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp998Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
