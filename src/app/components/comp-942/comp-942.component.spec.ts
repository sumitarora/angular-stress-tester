import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp942Component } from './comp-942.component';
import { Service942Service } from '../../services/service-942.service';

describe('Comp942Component', () => {
  let component: Comp942Component;
  let fixture: ComponentFixture<Comp942Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp942Component ],
providers: [Service942Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp942Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
