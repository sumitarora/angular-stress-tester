import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp560Component } from './comp-560.component';
import { Service560Service } from '../../services/service-560.service';

describe('Comp560Component', () => {
  let component: Comp560Component;
  let fixture: ComponentFixture<Comp560Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp560Component ],
providers: [Service560Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp560Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
