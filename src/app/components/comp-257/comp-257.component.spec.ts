import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp257Component } from './comp-257.component';
import { Service257Service } from '../../services/service-257.service';

describe('Comp257Component', () => {
  let component: Comp257Component;
  let fixture: ComponentFixture<Comp257Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp257Component ],
providers: [Service257Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp257Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
