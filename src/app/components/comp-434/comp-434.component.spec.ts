import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp434Component } from './comp-434.component';
import { Service434Service } from '../../services/service-434.service';

describe('Comp434Component', () => {
  let component: Comp434Component;
  let fixture: ComponentFixture<Comp434Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp434Component ],
providers: [Service434Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp434Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
