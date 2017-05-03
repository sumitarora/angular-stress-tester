import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp653Component } from './comp-653.component';
import { Service653Service } from '../../services/service-653.service';

describe('Comp653Component', () => {
  let component: Comp653Component;
  let fixture: ComponentFixture<Comp653Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp653Component ],
providers: [Service653Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp653Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
