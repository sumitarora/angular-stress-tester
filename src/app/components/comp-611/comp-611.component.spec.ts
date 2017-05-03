import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp611Component } from './comp-611.component';
import { Service611Service } from '../../services/service-611.service';

describe('Comp611Component', () => {
  let component: Comp611Component;
  let fixture: ComponentFixture<Comp611Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp611Component ],
providers: [Service611Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp611Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
