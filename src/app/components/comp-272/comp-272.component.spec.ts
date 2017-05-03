import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp272Component } from './comp-272.component';
import { Service272Service } from '../../services/service-272.service';

describe('Comp272Component', () => {
  let component: Comp272Component;
  let fixture: ComponentFixture<Comp272Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp272Component ],
providers: [Service272Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp272Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
