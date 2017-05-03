import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp566Component } from './comp-566.component';
import { Service566Service } from '../../services/service-566.service';

describe('Comp566Component', () => {
  let component: Comp566Component;
  let fixture: ComponentFixture<Comp566Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp566Component ],
providers: [Service566Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp566Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
