import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp690Component } from './comp-690.component';
import { Service690Service } from '../../services/service-690.service';

describe('Comp690Component', () => {
  let component: Comp690Component;
  let fixture: ComponentFixture<Comp690Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp690Component ],
providers: [Service690Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp690Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
