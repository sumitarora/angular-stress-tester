import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp49Component } from './comp-49.component';
import { Service49Service } from '../../services/service-49.service';

describe('Comp49Component', () => {
  let component: Comp49Component;
  let fixture: ComponentFixture<Comp49Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp49Component ],
providers: [Service49Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
