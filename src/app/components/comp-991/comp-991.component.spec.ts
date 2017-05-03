import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp991Component } from './comp-991.component';
import { Service991Service } from '../../services/service-991.service';

describe('Comp991Component', () => {
  let component: Comp991Component;
  let fixture: ComponentFixture<Comp991Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp991Component ],
providers: [Service991Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp991Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
