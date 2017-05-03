import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp531Component } from './comp-531.component';
import { Service531Service } from '../../services/service-531.service';

describe('Comp531Component', () => {
  let component: Comp531Component;
  let fixture: ComponentFixture<Comp531Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp531Component ],
providers: [Service531Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp531Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
