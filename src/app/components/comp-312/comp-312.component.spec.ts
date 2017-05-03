import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp312Component } from './comp-312.component';
import { Service312Service } from '../../services/service-312.service';

describe('Comp312Component', () => {
  let component: Comp312Component;
  let fixture: ComponentFixture<Comp312Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp312Component ],
providers: [Service312Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp312Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
