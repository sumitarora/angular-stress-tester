import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp483Component } from './comp-483.component';
import { Service483Service } from '../../services/service-483.service';

describe('Comp483Component', () => {
  let component: Comp483Component;
  let fixture: ComponentFixture<Comp483Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp483Component ],
providers: [Service483Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp483Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
