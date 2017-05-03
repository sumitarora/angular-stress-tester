import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp823Component } from './comp-823.component';
import { Service823Service } from '../../services/service-823.service';

describe('Comp823Component', () => {
  let component: Comp823Component;
  let fixture: ComponentFixture<Comp823Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp823Component ],
providers: [Service823Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp823Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
