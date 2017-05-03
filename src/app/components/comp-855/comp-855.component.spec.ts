import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp855Component } from './comp-855.component';
import { Service855Service } from '../../services/service-855.service';

describe('Comp855Component', () => {
  let component: Comp855Component;
  let fixture: ComponentFixture<Comp855Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp855Component ],
providers: [Service855Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp855Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
