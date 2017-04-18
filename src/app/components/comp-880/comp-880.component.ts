import { Component, OnInit } from '@angular/core';
import { Service880Service } from '../../services/service-880.service';

@Component({
  selector: 'app-comp-880',
  templateUrl: './comp-880.component.html',
  styleUrls: ['./comp-880.component.css']
})
export class Comp880Component implements OnInit {

  constructor(private _service: Service880Service) { }

  ngOnInit() {
  }

}
