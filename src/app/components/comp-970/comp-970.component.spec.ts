import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp970Component } from './comp-970.component';
import { Service970Service } from '../../services/service-970.service';

describe('Comp970Component', () => {
  let component: Comp970Component;
  let fixture: ComponentFixture<Comp970Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp970Component ],
providers: [Service970Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp970Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
