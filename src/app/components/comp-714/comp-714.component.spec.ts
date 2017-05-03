import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp714Component } from './comp-714.component';
import { Service714Service } from '../../services/service-714.service';

describe('Comp714Component', () => {
  let component: Comp714Component;
  let fixture: ComponentFixture<Comp714Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp714Component ],
providers: [Service714Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp714Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
