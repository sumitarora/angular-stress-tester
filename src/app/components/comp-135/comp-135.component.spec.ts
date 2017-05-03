import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp135Component } from './comp-135.component';
import { Service135Service } from '../../services/service-135.service';

describe('Comp135Component', () => {
  let component: Comp135Component;
  let fixture: ComponentFixture<Comp135Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp135Component ],
providers: [Service135Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp135Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
