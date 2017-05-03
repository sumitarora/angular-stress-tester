import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp732Component } from './comp-732.component';
import { Service732Service } from '../../services/service-732.service';

describe('Comp732Component', () => {
  let component: Comp732Component;
  let fixture: ComponentFixture<Comp732Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp732Component ],
providers: [Service732Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp732Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
