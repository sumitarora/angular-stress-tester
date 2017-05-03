import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp542Component } from './comp-542.component';
import { Service542Service } from '../../services/service-542.service';

describe('Comp542Component', () => {
  let component: Comp542Component;
  let fixture: ComponentFixture<Comp542Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp542Component ],
providers: [Service542Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp542Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
