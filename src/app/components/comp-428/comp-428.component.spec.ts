import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp428Component } from './comp-428.component';
import { Service428Service } from '../../services/service-428.service';

describe('Comp428Component', () => {
  let component: Comp428Component;
  let fixture: ComponentFixture<Comp428Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp428Component ],
providers: [Service428Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp428Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
