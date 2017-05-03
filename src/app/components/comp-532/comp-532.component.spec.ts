import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp532Component } from './comp-532.component';
import { Service532Service } from '../../services/service-532.service';

describe('Comp532Component', () => {
  let component: Comp532Component;
  let fixture: ComponentFixture<Comp532Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp532Component ],
providers: [Service532Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp532Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
