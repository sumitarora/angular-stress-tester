import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp374Component } from './comp-374.component';
import { Service374Service } from '../../services/service-374.service';

describe('Comp374Component', () => {
  let component: Comp374Component;
  let fixture: ComponentFixture<Comp374Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp374Component ],
providers: [Service374Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp374Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
