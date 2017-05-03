import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp450Component } from './comp-450.component';
import { Service450Service } from '../../services/service-450.service';

describe('Comp450Component', () => {
  let component: Comp450Component;
  let fixture: ComponentFixture<Comp450Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp450Component ],
providers: [Service450Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp450Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
