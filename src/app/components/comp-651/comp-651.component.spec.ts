import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp651Component } from './comp-651.component';
import { Service651Service } from '../../services/service-651.service';

describe('Comp651Component', () => {
  let component: Comp651Component;
  let fixture: ComponentFixture<Comp651Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp651Component ],
providers: [Service651Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp651Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
