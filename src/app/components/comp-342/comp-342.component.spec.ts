import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp342Component } from './comp-342.component';
import { Service342Service } from '../../services/service-342.service';

describe('Comp342Component', () => {
  let component: Comp342Component;
  let fixture: ComponentFixture<Comp342Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp342Component ],
providers: [Service342Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp342Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
