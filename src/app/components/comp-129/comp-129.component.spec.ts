import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp129Component } from './comp-129.component';
import { Service129Service } from '../../services/service-129.service';

describe('Comp129Component', () => {
  let component: Comp129Component;
  let fixture: ComponentFixture<Comp129Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp129Component ],
providers: [Service129Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp129Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
