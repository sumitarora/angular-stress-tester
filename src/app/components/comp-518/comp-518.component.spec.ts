import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp518Component } from './comp-518.component';
import { Service518Service } from '../../services/service-518.service';

describe('Comp518Component', () => {
  let component: Comp518Component;
  let fixture: ComponentFixture<Comp518Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp518Component ],
providers: [Service518Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp518Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
