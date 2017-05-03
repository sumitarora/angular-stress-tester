import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp66Component } from './comp-66.component';
import { Service66Service } from '../../services/service-66.service';

describe('Comp66Component', () => {
  let component: Comp66Component;
  let fixture: ComponentFixture<Comp66Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp66Component ],
providers: [Service66Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp66Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
