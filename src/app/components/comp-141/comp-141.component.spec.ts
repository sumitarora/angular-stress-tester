import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp141Component } from './comp-141.component';
import { Service141Service } from '../../services/service-141.service';

describe('Comp141Component', () => {
  let component: Comp141Component;
  let fixture: ComponentFixture<Comp141Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp141Component ],
providers: [Service141Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp141Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
