import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp48Component } from './comp-48.component';
import { Service48Service } from '../../services/service-48.service';

describe('Comp48Component', () => {
  let component: Comp48Component;
  let fixture: ComponentFixture<Comp48Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp48Component ],
providers: [Service48Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
