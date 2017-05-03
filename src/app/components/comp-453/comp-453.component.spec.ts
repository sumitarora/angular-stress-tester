import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp453Component } from './comp-453.component';
import { Service453Service } from '../../services/service-453.service';

describe('Comp453Component', () => {
  let component: Comp453Component;
  let fixture: ComponentFixture<Comp453Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp453Component ],
providers: [Service453Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp453Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
