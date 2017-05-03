import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp194Component } from './comp-194.component';
import { Service194Service } from '../../services/service-194.service';

describe('Comp194Component', () => {
  let component: Comp194Component;
  let fixture: ComponentFixture<Comp194Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp194Component ],
providers: [Service194Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp194Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
