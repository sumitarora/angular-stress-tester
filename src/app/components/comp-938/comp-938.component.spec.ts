import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp938Component } from './comp-938.component';
import { Service938Service } from '../../services/service-938.service';

describe('Comp938Component', () => {
  let component: Comp938Component;
  let fixture: ComponentFixture<Comp938Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp938Component ],
providers: [Service938Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp938Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
