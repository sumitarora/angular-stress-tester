import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp209Component } from './comp-209.component';
import { Service209Service } from '../../services/service-209.service';

describe('Comp209Component', () => {
  let component: Comp209Component;
  let fixture: ComponentFixture<Comp209Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp209Component ],
providers: [Service209Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp209Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
