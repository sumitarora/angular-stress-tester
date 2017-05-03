import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp22Component } from './comp-22.component';
import { Service22Service } from '../../services/service-22.service';

describe('Comp22Component', () => {
  let component: Comp22Component;
  let fixture: ComponentFixture<Comp22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp22Component ],
providers: [Service22Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
