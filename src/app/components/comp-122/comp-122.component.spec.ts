import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp122Component } from './comp-122.component';
import { Service122Service } from '../../services/service-122.service';

describe('Comp122Component', () => {
  let component: Comp122Component;
  let fixture: ComponentFixture<Comp122Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp122Component ],
providers: [Service122Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp122Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
