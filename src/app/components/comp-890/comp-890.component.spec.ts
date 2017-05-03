import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp890Component } from './comp-890.component';
import { Service890Service } from '../../services/service-890.service';

describe('Comp890Component', () => {
  let component: Comp890Component;
  let fixture: ComponentFixture<Comp890Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp890Component ],
providers: [Service890Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp890Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
