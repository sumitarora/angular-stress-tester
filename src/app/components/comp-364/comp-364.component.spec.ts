import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp364Component } from './comp-364.component';
import { Service364Service } from '../../services/service-364.service';

describe('Comp364Component', () => {
  let component: Comp364Component;
  let fixture: ComponentFixture<Comp364Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp364Component ],
providers: [Service364Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp364Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
