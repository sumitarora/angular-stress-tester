import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp168Component } from './comp-168.component';
import { Service168Service } from '../../services/service-168.service';

describe('Comp168Component', () => {
  let component: Comp168Component;
  let fixture: ComponentFixture<Comp168Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp168Component ],
providers: [Service168Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp168Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
