import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp83Component } from './comp-83.component';
import { Service83Service } from '../../services/service-83.service';

describe('Comp83Component', () => {
  let component: Comp83Component;
  let fixture: ComponentFixture<Comp83Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp83Component ],
providers: [Service83Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp83Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
