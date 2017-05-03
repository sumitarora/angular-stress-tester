import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp461Component } from './comp-461.component';
import { Service461Service } from '../../services/service-461.service';

describe('Comp461Component', () => {
  let component: Comp461Component;
  let fixture: ComponentFixture<Comp461Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp461Component ],
providers: [Service461Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp461Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
