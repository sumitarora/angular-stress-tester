import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp842Component } from './comp-842.component';
import { Service842Service } from '../../services/service-842.service';

describe('Comp842Component', () => {
  let component: Comp842Component;
  let fixture: ComponentFixture<Comp842Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp842Component ],
providers: [Service842Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp842Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
