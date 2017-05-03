import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp104Component } from './comp-104.component';
import { Service104Service } from '../../services/service-104.service';

describe('Comp104Component', () => {
  let component: Comp104Component;
  let fixture: ComponentFixture<Comp104Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp104Component ],
providers: [Service104Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp104Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
