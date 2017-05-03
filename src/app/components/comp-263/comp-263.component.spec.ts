import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp263Component } from './comp-263.component';
import { Service263Service } from '../../services/service-263.service';

describe('Comp263Component', () => {
  let component: Comp263Component;
  let fixture: ComponentFixture<Comp263Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp263Component ],
providers: [Service263Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp263Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
