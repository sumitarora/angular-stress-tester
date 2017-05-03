import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp172Component } from './comp-172.component';
import { Service172Service } from '../../services/service-172.service';

describe('Comp172Component', () => {
  let component: Comp172Component;
  let fixture: ComponentFixture<Comp172Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp172Component ],
providers: [Service172Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp172Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
