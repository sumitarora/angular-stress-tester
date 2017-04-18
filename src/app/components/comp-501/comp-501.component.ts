import { Component, OnInit } from '@angular/core';
import { Service501Service } from '../../services/service-501.service';

@Component({
  selector: 'app-comp-501',
  templateUrl: './comp-501.component.html',
  styleUrls: ['./comp-501.component.css']
})
export class Comp501Component implements OnInit {

  constructor(private _service: Service501Service) { }

  ngOnInit() {
  }

}
