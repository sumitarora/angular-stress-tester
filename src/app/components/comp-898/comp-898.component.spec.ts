import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp898Component } from './comp-898.component';
import { Service898Service } from '../../services/service-898.service';

describe('Comp898Component', () => {
  let component: Comp898Component;
  let fixture: ComponentFixture<Comp898Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp898Component ],
providers: [Service898Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp898Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
