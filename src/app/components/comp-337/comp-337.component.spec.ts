import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp337Component } from './comp-337.component';
import { Service337Service } from '../../services/service-337.service';

describe('Comp337Component', () => {
  let component: Comp337Component;
  let fixture: ComponentFixture<Comp337Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp337Component ],
providers: [Service337Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp337Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
