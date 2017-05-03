import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp666Component } from './comp-666.component';
import { Service666Service } from '../../services/service-666.service';

describe('Comp666Component', () => {
  let component: Comp666Component;
  let fixture: ComponentFixture<Comp666Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp666Component ],
providers: [Service666Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp666Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
