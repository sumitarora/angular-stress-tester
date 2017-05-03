import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp974Component } from './comp-974.component';
import { Service974Service } from '../../services/service-974.service';

describe('Comp974Component', () => {
  let component: Comp974Component;
  let fixture: ComponentFixture<Comp974Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp974Component ],
providers: [Service974Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp974Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
