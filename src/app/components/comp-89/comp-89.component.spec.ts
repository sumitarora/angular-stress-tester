import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp89Component } from './comp-89.component';
import { Service89Service } from '../../services/service-89.service';

describe('Comp89Component', () => {
  let component: Comp89Component;
  let fixture: ComponentFixture<Comp89Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp89Component ],
providers: [Service89Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp89Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
