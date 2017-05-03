import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp727Component } from './comp-727.component';
import { Service727Service } from '../../services/service-727.service';

describe('Comp727Component', () => {
  let component: Comp727Component;
  let fixture: ComponentFixture<Comp727Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp727Component ],
providers: [Service727Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp727Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
