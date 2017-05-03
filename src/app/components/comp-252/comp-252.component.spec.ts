import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp252Component } from './comp-252.component';
import { Service252Service } from '../../services/service-252.service';

describe('Comp252Component', () => {
  let component: Comp252Component;
  let fixture: ComponentFixture<Comp252Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp252Component ],
providers: [Service252Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp252Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
