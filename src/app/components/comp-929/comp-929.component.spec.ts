import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp929Component } from './comp-929.component';
import { Service929Service } from '../../services/service-929.service';

describe('Comp929Component', () => {
  let component: Comp929Component;
  let fixture: ComponentFixture<Comp929Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp929Component ],
providers: [Service929Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp929Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
