import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp818Component } from './comp-818.component';
import { Service818Service } from '../../services/service-818.service';

describe('Comp818Component', () => {
  let component: Comp818Component;
  let fixture: ComponentFixture<Comp818Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp818Component ],
providers: [Service818Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp818Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
