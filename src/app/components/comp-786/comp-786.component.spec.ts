import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp786Component } from './comp-786.component';
import { Service786Service } from '../../services/service-786.service';

describe('Comp786Component', () => {
  let component: Comp786Component;
  let fixture: ComponentFixture<Comp786Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp786Component ],
providers: [Service786Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp786Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
