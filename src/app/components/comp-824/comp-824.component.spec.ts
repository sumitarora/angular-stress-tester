import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp824Component } from './comp-824.component';
import { Service824Service } from '../../services/service-824.service';

describe('Comp824Component', () => {
  let component: Comp824Component;
  let fixture: ComponentFixture<Comp824Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp824Component ],
providers: [Service824Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp824Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
