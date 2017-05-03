import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp91Component } from './comp-91.component';
import { Service91Service } from '../../services/service-91.service';

describe('Comp91Component', () => {
  let component: Comp91Component;
  let fixture: ComponentFixture<Comp91Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp91Component ],
providers: [Service91Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp91Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
