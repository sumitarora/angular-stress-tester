import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp575Component } from './comp-575.component';
import { Service575Service } from '../../services/service-575.service';

describe('Comp575Component', () => {
  let component: Comp575Component;
  let fixture: ComponentFixture<Comp575Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp575Component ],
providers: [Service575Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp575Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
