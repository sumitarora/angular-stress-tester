import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp181Component } from './comp-181.component';
import { Service181Service } from '../../services/service-181.service';

describe('Comp181Component', () => {
  let component: Comp181Component;
  let fixture: ComponentFixture<Comp181Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp181Component ],
providers: [Service181Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp181Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
