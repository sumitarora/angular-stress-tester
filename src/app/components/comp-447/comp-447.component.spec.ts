import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp447Component } from './comp-447.component';
import { Service447Service } from '../../services/service-447.service';

describe('Comp447Component', () => {
  let component: Comp447Component;
  let fixture: ComponentFixture<Comp447Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp447Component ],
providers: [Service447Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp447Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
