import { Component, OnInit } from '@angular/core';
import { Service990Service } from '../../services/service-990.service';

@Component({
  selector: 'app-comp-990',
  templateUrl: './comp-990.component.html',
  styleUrls: ['./comp-990.component.css']
})
export class Comp990Component implements OnInit {

  constructor(private _service: Service990Service) { }

  ngOnInit() {
  }

}
