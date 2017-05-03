import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp681Component } from './comp-681.component';
import { Service681Service } from '../../services/service-681.service';

describe('Comp681Component', () => {
  let component: Comp681Component;
  let fixture: ComponentFixture<Comp681Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp681Component ],
providers: [Service681Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp681Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
