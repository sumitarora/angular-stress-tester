import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp508Component } from './comp-508.component';
import { Service508Service } from '../../services/service-508.service';

describe('Comp508Component', () => {
  let component: Comp508Component;
  let fixture: ComponentFixture<Comp508Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp508Component ],
providers: [Service508Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp508Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
