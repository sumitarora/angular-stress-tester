import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp285Component } from './comp-285.component';
import { Service285Service } from '../../services/service-285.service';

describe('Comp285Component', () => {
  let component: Comp285Component;
  let fixture: ComponentFixture<Comp285Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp285Component ],
providers: [Service285Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp285Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
