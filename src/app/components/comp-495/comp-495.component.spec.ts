import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp495Component } from './comp-495.component';
import { Service495Service } from '../../services/service-495.service';

describe('Comp495Component', () => {
  let component: Comp495Component;
  let fixture: ComponentFixture<Comp495Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp495Component ],
providers: [Service495Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp495Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
