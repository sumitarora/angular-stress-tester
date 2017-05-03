import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp810Component } from './comp-810.component';
import { Service810Service } from '../../services/service-810.service';

describe('Comp810Component', () => {
  let component: Comp810Component;
  let fixture: ComponentFixture<Comp810Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp810Component ],
providers: [Service810Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp810Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
