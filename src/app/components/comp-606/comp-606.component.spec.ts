import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp606Component } from './comp-606.component';
import { Service606Service } from '../../services/service-606.service';

describe('Comp606Component', () => {
  let component: Comp606Component;
  let fixture: ComponentFixture<Comp606Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp606Component ],
providers: [Service606Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp606Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
