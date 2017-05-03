import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp635Component } from './comp-635.component';
import { Service635Service } from '../../services/service-635.service';

describe('Comp635Component', () => {
  let component: Comp635Component;
  let fixture: ComponentFixture<Comp635Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp635Component ],
providers: [Service635Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp635Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
