import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp593Component } from './comp-593.component';
import { Service593Service } from '../../services/service-593.service';

describe('Comp593Component', () => {
  let component: Comp593Component;
  let fixture: ComponentFixture<Comp593Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp593Component ],
providers: [Service593Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp593Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
