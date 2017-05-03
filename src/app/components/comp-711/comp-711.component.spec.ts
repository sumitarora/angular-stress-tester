import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp711Component } from './comp-711.component';
import { Service711Service } from '../../services/service-711.service';

describe('Comp711Component', () => {
  let component: Comp711Component;
  let fixture: ComponentFixture<Comp711Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp711Component ],
providers: [Service711Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp711Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
