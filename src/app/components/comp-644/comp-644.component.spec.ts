import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp644Component } from './comp-644.component';
import { Service644Service } from '../../services/service-644.service';

describe('Comp644Component', () => {
  let component: Comp644Component;
  let fixture: ComponentFixture<Comp644Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp644Component ],
providers: [Service644Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp644Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
