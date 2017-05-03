import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp244Component } from './comp-244.component';
import { Service244Service } from '../../services/service-244.service';

describe('Comp244Component', () => {
  let component: Comp244Component;
  let fixture: ComponentFixture<Comp244Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp244Component ],
providers: [Service244Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp244Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
