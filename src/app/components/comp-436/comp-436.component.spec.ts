import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp436Component } from './comp-436.component';
import { Service436Service } from '../../services/service-436.service';

describe('Comp436Component', () => {
  let component: Comp436Component;
  let fixture: ComponentFixture<Comp436Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp436Component ],
providers: [Service436Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp436Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
