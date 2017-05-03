import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp712Component } from './comp-712.component';
import { Service712Service } from '../../services/service-712.service';

describe('Comp712Component', () => {
  let component: Comp712Component;
  let fixture: ComponentFixture<Comp712Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp712Component ],
providers: [Service712Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp712Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
