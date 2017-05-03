import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp514Component } from './comp-514.component';
import { Service514Service } from '../../services/service-514.service';

describe('Comp514Component', () => {
  let component: Comp514Component;
  let fixture: ComponentFixture<Comp514Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp514Component ],
providers: [Service514Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp514Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
