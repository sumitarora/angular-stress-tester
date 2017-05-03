import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp581Component } from './comp-581.component';
import { Service581Service } from '../../services/service-581.service';

describe('Comp581Component', () => {
  let component: Comp581Component;
  let fixture: ComponentFixture<Comp581Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp581Component ],
providers: [Service581Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp581Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
