import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp330Component } from './comp-330.component';
import { Service330Service } from '../../services/service-330.service';

describe('Comp330Component', () => {
  let component: Comp330Component;
  let fixture: ComponentFixture<Comp330Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp330Component ],
providers: [Service330Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp330Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
