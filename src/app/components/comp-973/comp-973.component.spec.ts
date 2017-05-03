import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp973Component } from './comp-973.component';
import { Service973Service } from '../../services/service-973.service';

describe('Comp973Component', () => {
  let component: Comp973Component;
  let fixture: ComponentFixture<Comp973Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp973Component ],
providers: [Service973Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp973Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
