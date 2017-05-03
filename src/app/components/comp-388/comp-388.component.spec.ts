import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp388Component } from './comp-388.component';
import { Service388Service } from '../../services/service-388.service';

describe('Comp388Component', () => {
  let component: Comp388Component;
  let fixture: ComponentFixture<Comp388Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp388Component ],
providers: [Service388Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp388Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
