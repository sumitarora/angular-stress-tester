import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp944Component } from './comp-944.component';
import { Service944Service } from '../../services/service-944.service';

describe('Comp944Component', () => {
  let component: Comp944Component;
  let fixture: ComponentFixture<Comp944Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp944Component ],
providers: [Service944Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp944Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
