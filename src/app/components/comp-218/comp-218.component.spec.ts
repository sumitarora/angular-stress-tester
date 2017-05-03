import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp218Component } from './comp-218.component';
import { Service218Service } from '../../services/service-218.service';

describe('Comp218Component', () => {
  let component: Comp218Component;
  let fixture: ComponentFixture<Comp218Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp218Component ],
providers: [Service218Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp218Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
