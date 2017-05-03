import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp886Component } from './comp-886.component';
import { Service886Service } from '../../services/service-886.service';

describe('Comp886Component', () => {
  let component: Comp886Component;
  let fixture: ComponentFixture<Comp886Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp886Component ],
providers: [Service886Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp886Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
