import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp985Component } from './comp-985.component';
import { Service985Service } from '../../services/service-985.service';

describe('Comp985Component', () => {
  let component: Comp985Component;
  let fixture: ComponentFixture<Comp985Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp985Component ],
providers: [Service985Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp985Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
