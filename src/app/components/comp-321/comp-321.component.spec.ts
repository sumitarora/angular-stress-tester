import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp321Component } from './comp-321.component';
import { Service321Service } from '../../services/service-321.service';

describe('Comp321Component', () => {
  let component: Comp321Component;
  let fixture: ComponentFixture<Comp321Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp321Component ],
providers: [Service321Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp321Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
