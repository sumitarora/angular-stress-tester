import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp174Component } from './comp-174.component';
import { Service174Service } from '../../services/service-174.service';

describe('Comp174Component', () => {
  let component: Comp174Component;
  let fixture: ComponentFixture<Comp174Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp174Component ],
providers: [Service174Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp174Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
