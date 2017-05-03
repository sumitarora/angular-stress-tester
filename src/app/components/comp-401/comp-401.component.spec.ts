import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp401Component } from './comp-401.component';
import { Service401Service } from '../../services/service-401.service';

describe('Comp401Component', () => {
  let component: Comp401Component;
  let fixture: ComponentFixture<Comp401Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp401Component ],
providers: [Service401Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp401Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
