import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp923Component } from './comp-923.component';
import { Service923Service } from '../../services/service-923.service';

describe('Comp923Component', () => {
  let component: Comp923Component;
  let fixture: ComponentFixture<Comp923Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp923Component ],
providers: [Service923Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp923Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
