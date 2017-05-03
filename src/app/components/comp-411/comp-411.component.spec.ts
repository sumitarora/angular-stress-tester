import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp411Component } from './comp-411.component';
import { Service411Service } from '../../services/service-411.service';

describe('Comp411Component', () => {
  let component: Comp411Component;
  let fixture: ComponentFixture<Comp411Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp411Component ],
providers: [Service411Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp411Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
