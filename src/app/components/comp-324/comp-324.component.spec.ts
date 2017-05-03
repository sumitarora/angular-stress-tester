import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp324Component } from './comp-324.component';
import { Service324Service } from '../../services/service-324.service';

describe('Comp324Component', () => {
  let component: Comp324Component;
  let fixture: ComponentFixture<Comp324Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp324Component ],
providers: [Service324Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp324Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
