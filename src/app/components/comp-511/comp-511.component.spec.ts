import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp511Component } from './comp-511.component';
import { Service511Service } from '../../services/service-511.service';

describe('Comp511Component', () => {
  let component: Comp511Component;
  let fixture: ComponentFixture<Comp511Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp511Component ],
providers: [Service511Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp511Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
