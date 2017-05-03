import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp19Component } from './comp-19.component';
import { Service19Service } from '../../services/service-19.service';

describe('Comp19Component', () => {
  let component: Comp19Component;
  let fixture: ComponentFixture<Comp19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp19Component ],
providers: [Service19Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
