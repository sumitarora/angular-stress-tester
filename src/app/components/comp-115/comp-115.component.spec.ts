import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp115Component } from './comp-115.component';
import { Service115Service } from '../../services/service-115.service';

describe('Comp115Component', () => {
  let component: Comp115Component;
  let fixture: ComponentFixture<Comp115Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp115Component ],
providers: [Service115Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp115Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
