import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp33Component } from './comp-33.component';
import { Service33Service } from '../../services/service-33.service';

describe('Comp33Component', () => {
  let component: Comp33Component;
  let fixture: ComponentFixture<Comp33Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp33Component ],
providers: [Service33Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
