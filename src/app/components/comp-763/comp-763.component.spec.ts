import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp763Component } from './comp-763.component';
import { Service763Service } from '../../services/service-763.service';

describe('Comp763Component', () => {
  let component: Comp763Component;
  let fixture: ComponentFixture<Comp763Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp763Component ],
providers: [Service763Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp763Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
