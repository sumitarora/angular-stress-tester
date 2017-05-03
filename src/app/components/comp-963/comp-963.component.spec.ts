import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp963Component } from './comp-963.component';
import { Service963Service } from '../../services/service-963.service';

describe('Comp963Component', () => {
  let component: Comp963Component;
  let fixture: ComponentFixture<Comp963Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp963Component ],
providers: [Service963Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp963Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
