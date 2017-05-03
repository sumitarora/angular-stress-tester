import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp396Component } from './comp-396.component';
import { Service396Service } from '../../services/service-396.service';

describe('Comp396Component', () => {
  let component: Comp396Component;
  let fixture: ComponentFixture<Comp396Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp396Component ],
providers: [Service396Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp396Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
