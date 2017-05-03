import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp844Component } from './comp-844.component';
import { Service844Service } from '../../services/service-844.service';

describe('Comp844Component', () => {
  let component: Comp844Component;
  let fixture: ComponentFixture<Comp844Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp844Component ],
providers: [Service844Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp844Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
