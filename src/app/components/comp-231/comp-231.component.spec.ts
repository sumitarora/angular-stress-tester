import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp231Component } from './comp-231.component';
import { Service231Service } from '../../services/service-231.service';

describe('Comp231Component', () => {
  let component: Comp231Component;
  let fixture: ComponentFixture<Comp231Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp231Component ],
providers: [Service231Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp231Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
