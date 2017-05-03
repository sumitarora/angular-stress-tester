import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp546Component } from './comp-546.component';
import { Service546Service } from '../../services/service-546.service';

describe('Comp546Component', () => {
  let component: Comp546Component;
  let fixture: ComponentFixture<Comp546Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp546Component ],
providers: [Service546Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp546Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
