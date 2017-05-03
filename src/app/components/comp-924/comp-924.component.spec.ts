import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp924Component } from './comp-924.component';
import { Service924Service } from '../../services/service-924.service';

describe('Comp924Component', () => {
  let component: Comp924Component;
  let fixture: ComponentFixture<Comp924Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp924Component ],
providers: [Service924Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp924Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
