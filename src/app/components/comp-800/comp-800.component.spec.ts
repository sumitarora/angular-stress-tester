import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp800Component } from './comp-800.component';
import { Service800Service } from '../../services/service-800.service';

describe('Comp800Component', () => {
  let component: Comp800Component;
  let fixture: ComponentFixture<Comp800Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp800Component ],
providers: [Service800Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp800Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
