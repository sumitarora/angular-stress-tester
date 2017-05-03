import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp270Component } from './comp-270.component';
import { Service270Service } from '../../services/service-270.service';

describe('Comp270Component', () => {
  let component: Comp270Component;
  let fixture: ComponentFixture<Comp270Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp270Component ],
providers: [Service270Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp270Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
