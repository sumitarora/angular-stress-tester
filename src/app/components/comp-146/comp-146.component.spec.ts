import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp146Component } from './comp-146.component';
import { Service146Service } from '../../services/service-146.service';

describe('Comp146Component', () => {
  let component: Comp146Component;
  let fixture: ComponentFixture<Comp146Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp146Component ],
providers: [Service146Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp146Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
