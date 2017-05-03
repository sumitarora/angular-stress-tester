import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp672Component } from './comp-672.component';
import { Service672Service } from '../../services/service-672.service';

describe('Comp672Component', () => {
  let component: Comp672Component;
  let fixture: ComponentFixture<Comp672Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp672Component ],
providers: [Service672Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp672Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
