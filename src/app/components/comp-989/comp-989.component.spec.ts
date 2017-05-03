import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp989Component } from './comp-989.component';
import { Service989Service } from '../../services/service-989.service';

describe('Comp989Component', () => {
  let component: Comp989Component;
  let fixture: ComponentFixture<Comp989Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp989Component ],
providers: [Service989Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp989Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
