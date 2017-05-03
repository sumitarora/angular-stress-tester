import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp706Component } from './comp-706.component';
import { Service706Service } from '../../services/service-706.service';

describe('Comp706Component', () => {
  let component: Comp706Component;
  let fixture: ComponentFixture<Comp706Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp706Component ],
providers: [Service706Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp706Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
