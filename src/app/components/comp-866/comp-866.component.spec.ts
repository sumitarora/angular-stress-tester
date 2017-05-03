import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp866Component } from './comp-866.component';
import { Service866Service } from '../../services/service-866.service';

describe('Comp866Component', () => {
  let component: Comp866Component;
  let fixture: ComponentFixture<Comp866Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp866Component ],
providers: [Service866Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp866Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
