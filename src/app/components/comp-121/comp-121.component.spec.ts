import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp121Component } from './comp-121.component';
import { Service121Service } from '../../services/service-121.service';

describe('Comp121Component', () => {
  let component: Comp121Component;
  let fixture: ComponentFixture<Comp121Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp121Component ],
providers: [Service121Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp121Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
