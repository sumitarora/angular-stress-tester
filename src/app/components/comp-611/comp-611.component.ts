import { Component, OnInit } from '@angular/core';
import { Service611Service } from '../../services/service-611.service';

@Component({
  selector: 'app-comp-611',
  templateUrl: './comp-611.component.html',
  styleUrls: ['./comp-611.component.css']
})
export class Comp611Component implements OnInit {

  constructor(private _service: Service611Service) { }

  ngOnInit() {
  }

}
