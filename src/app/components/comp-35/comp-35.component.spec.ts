import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp35Component } from './comp-35.component';
import { Service35Service } from '../../services/service-35.service';

describe('Comp35Component', () => {
  let component: Comp35Component;
  let fixture: ComponentFixture<Comp35Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp35Component ],
providers: [Service35Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
