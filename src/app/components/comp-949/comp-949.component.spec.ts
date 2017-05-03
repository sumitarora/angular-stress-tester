import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp949Component } from './comp-949.component';
import { Service949Service } from '../../services/service-949.service';

describe('Comp949Component', () => {
  let component: Comp949Component;
  let fixture: ComponentFixture<Comp949Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp949Component ],
providers: [Service949Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp949Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
