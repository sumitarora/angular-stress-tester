import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp549Component } from './comp-549.component';
import { Service549Service } from '../../services/service-549.service';

describe('Comp549Component', () => {
  let component: Comp549Component;
  let fixture: ComponentFixture<Comp549Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp549Component ],
providers: [Service549Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp549Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
