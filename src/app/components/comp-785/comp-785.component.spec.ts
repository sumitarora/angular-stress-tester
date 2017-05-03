import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp785Component } from './comp-785.component';
import { Service785Service } from '../../services/service-785.service';

describe('Comp785Component', () => {
  let component: Comp785Component;
  let fixture: ComponentFixture<Comp785Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp785Component ],
providers: [Service785Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp785Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
