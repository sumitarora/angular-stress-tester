import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp195Component } from './comp-195.component';
import { Service195Service } from '../../services/service-195.service';

describe('Comp195Component', () => {
  let component: Comp195Component;
  let fixture: ComponentFixture<Comp195Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp195Component ],
providers: [Service195Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp195Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
