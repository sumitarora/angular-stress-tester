import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp596Component } from './comp-596.component';
import { Service596Service } from '../../services/service-596.service';

describe('Comp596Component', () => {
  let component: Comp596Component;
  let fixture: ComponentFixture<Comp596Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp596Component ],
providers: [Service596Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp596Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
