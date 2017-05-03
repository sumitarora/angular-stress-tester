import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp884Component } from './comp-884.component';
import { Service884Service } from '../../services/service-884.service';

describe('Comp884Component', () => {
  let component: Comp884Component;
  let fixture: ComponentFixture<Comp884Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp884Component ],
providers: [Service884Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp884Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
