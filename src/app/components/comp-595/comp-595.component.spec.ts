import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp595Component } from './comp-595.component';
import { Service595Service } from '../../services/service-595.service';

describe('Comp595Component', () => {
  let component: Comp595Component;
  let fixture: ComponentFixture<Comp595Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp595Component ],
providers: [Service595Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp595Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
