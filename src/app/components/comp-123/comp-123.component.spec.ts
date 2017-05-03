import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp123Component } from './comp-123.component';
import { Service123Service } from '../../services/service-123.service';

describe('Comp123Component', () => {
  let component: Comp123Component;
  let fixture: ComponentFixture<Comp123Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp123Component ],
providers: [Service123Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp123Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
