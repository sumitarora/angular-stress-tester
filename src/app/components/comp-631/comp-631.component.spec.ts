import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp631Component } from './comp-631.component';
import { Service631Service } from '../../services/service-631.service';

describe('Comp631Component', () => {
  let component: Comp631Component;
  let fixture: ComponentFixture<Comp631Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp631Component ],
providers: [Service631Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp631Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
