import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp921Component } from './comp-921.component';
import { Service921Service } from '../../services/service-921.service';

describe('Comp921Component', () => {
  let component: Comp921Component;
  let fixture: ComponentFixture<Comp921Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp921Component ],
providers: [Service921Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp921Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
