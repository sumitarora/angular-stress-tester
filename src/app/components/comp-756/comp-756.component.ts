import { Component, OnInit } from '@angular/core';
import { Service756Service } from '../../services/service-756.service';

@Component({
  selector: 'app-comp-756',
  templateUrl: './comp-756.component.html',
  styleUrls: ['./comp-756.component.css']
})
export class Comp756Component implements OnInit {

  constructor(private _service: Service756Service) { }

  ngOnInit() {
  }

}
