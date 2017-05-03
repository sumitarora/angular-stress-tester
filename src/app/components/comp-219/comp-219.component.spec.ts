import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp219Component } from './comp-219.component';
import { Service219Service } from '../../services/service-219.service';

describe('Comp219Component', () => {
  let component: Comp219Component;
  let fixture: ComponentFixture<Comp219Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp219Component ],
providers: [Service219Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp219Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
