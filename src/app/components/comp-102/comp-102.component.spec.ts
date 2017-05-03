import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp102Component } from './comp-102.component';
import { Service102Service } from '../../services/service-102.service';

describe('Comp102Component', () => {
  let component: Comp102Component;
  let fixture: ComponentFixture<Comp102Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp102Component ],
providers: [Service102Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp102Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
