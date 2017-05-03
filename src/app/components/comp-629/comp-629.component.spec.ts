import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp629Component } from './comp-629.component';
import { Service629Service } from '../../services/service-629.service';

describe('Comp629Component', () => {
  let component: Comp629Component;
  let fixture: ComponentFixture<Comp629Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp629Component ],
providers: [Service629Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp629Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
