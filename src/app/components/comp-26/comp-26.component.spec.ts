import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp26Component } from './comp-26.component';
import { Service26Service } from '../../services/service-26.service';

describe('Comp26Component', () => {
  let component: Comp26Component;
  let fixture: ComponentFixture<Comp26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp26Component ],
providers: [Service26Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
