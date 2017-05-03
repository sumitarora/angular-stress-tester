import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp271Component } from './comp-271.component';
import { Service271Service } from '../../services/service-271.service';

describe('Comp271Component', () => {
  let component: Comp271Component;
  let fixture: ComponentFixture<Comp271Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp271Component ],
providers: [Service271Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp271Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
