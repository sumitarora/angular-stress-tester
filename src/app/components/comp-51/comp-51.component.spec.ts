import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp51Component } from './comp-51.component';
import { Service51Service } from '../../services/service-51.service';

describe('Comp51Component', () => {
  let component: Comp51Component;
  let fixture: ComponentFixture<Comp51Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp51Component ],
providers: [Service51Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp51Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
