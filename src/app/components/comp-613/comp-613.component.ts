import { Component, OnInit } from '@angular/core';
import { Service613Service } from '../../services/service-613.service';

@Component({
  selector: 'app-comp-613',
  templateUrl: './comp-613.component.html',
  styleUrls: ['./comp-613.component.css']
})
export class Comp613Component implements OnInit {

  constructor(private _service: Service613Service) { }

  ngOnInit() {
  }

}
