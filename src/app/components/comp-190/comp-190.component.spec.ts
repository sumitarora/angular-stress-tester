import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp190Component } from './comp-190.component';
import { Service190Service } from '../../services/service-190.service';

describe('Comp190Component', () => {
  let component: Comp190Component;
  let fixture: ComponentFixture<Comp190Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp190Component ],
providers: [Service190Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp190Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
