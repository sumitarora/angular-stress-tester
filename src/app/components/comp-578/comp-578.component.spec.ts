import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp578Component } from './comp-578.component';
import { Service578Service } from '../../services/service-578.service';

describe('Comp578Component', () => {
  let component: Comp578Component;
  let fixture: ComponentFixture<Comp578Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp578Component ],
providers: [Service578Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp578Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
