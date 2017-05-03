import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp166Component } from './comp-166.component';
import { Service166Service } from '../../services/service-166.service';

describe('Comp166Component', () => {
  let component: Comp166Component;
  let fixture: ComponentFixture<Comp166Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp166Component ],
providers: [Service166Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp166Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
