import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp192Component } from './comp-192.component';
import { Service192Service } from '../../services/service-192.service';

describe('Comp192Component', () => {
  let component: Comp192Component;
  let fixture: ComponentFixture<Comp192Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp192Component ],
providers: [Service192Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp192Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
