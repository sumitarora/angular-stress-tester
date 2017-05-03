import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp159Component } from './comp-159.component';
import { Service159Service } from '../../services/service-159.service';

describe('Comp159Component', () => {
  let component: Comp159Component;
  let fixture: ComponentFixture<Comp159Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp159Component ],
providers: [Service159Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp159Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
