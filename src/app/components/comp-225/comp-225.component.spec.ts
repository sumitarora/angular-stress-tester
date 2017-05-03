import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp225Component } from './comp-225.component';
import { Service225Service } from '../../services/service-225.service';

describe('Comp225Component', () => {
  let component: Comp225Component;
  let fixture: ComponentFixture<Comp225Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp225Component ],
providers: [Service225Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp225Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
