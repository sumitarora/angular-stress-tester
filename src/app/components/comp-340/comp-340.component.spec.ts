import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp340Component } from './comp-340.component';
import { Service340Service } from '../../services/service-340.service';

describe('Comp340Component', () => {
  let component: Comp340Component;
  let fixture: ComponentFixture<Comp340Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp340Component ],
providers: [Service340Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp340Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
