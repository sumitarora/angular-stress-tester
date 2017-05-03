import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp517Component } from './comp-517.component';
import { Service517Service } from '../../services/service-517.service';

describe('Comp517Component', () => {
  let component: Comp517Component;
  let fixture: ComponentFixture<Comp517Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp517Component ],
providers: [Service517Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp517Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
