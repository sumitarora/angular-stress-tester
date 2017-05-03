import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp794Component } from './comp-794.component';
import { Service794Service } from '../../services/service-794.service';

describe('Comp794Component', () => {
  let component: Comp794Component;
  let fixture: ComponentFixture<Comp794Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp794Component ],
providers: [Service794Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp794Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
