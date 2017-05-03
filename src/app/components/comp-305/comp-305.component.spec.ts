import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp305Component } from './comp-305.component';
import { Service305Service } from '../../services/service-305.service';

describe('Comp305Component', () => {
  let component: Comp305Component;
  let fixture: ComponentFixture<Comp305Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp305Component ],
providers: [Service305Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp305Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
