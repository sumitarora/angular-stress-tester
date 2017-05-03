import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp142Component } from './comp-142.component';
import { Service142Service } from '../../services/service-142.service';

describe('Comp142Component', () => {
  let component: Comp142Component;
  let fixture: ComponentFixture<Comp142Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp142Component ],
providers: [Service142Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp142Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
