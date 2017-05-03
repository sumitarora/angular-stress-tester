import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp322Component } from './comp-322.component';
import { Service322Service } from '../../services/service-322.service';

describe('Comp322Component', () => {
  let component: Comp322Component;
  let fixture: ComponentFixture<Comp322Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp322Component ],
providers: [Service322Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp322Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
