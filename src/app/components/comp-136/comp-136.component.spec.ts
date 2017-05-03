import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp136Component } from './comp-136.component';
import { Service136Service } from '../../services/service-136.service';

describe('Comp136Component', () => {
  let component: Comp136Component;
  let fixture: ComponentFixture<Comp136Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp136Component ],
providers: [Service136Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp136Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
