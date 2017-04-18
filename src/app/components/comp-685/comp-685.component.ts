import { Component, OnInit } from '@angular/core';
import { Service685Service } from '../../services/service-685.service';

@Component({
  selector: 'app-comp-685',
  templateUrl: './comp-685.component.html',
  styleUrls: ['./comp-685.component.css']
})
export class Comp685Component implements OnInit {

  constructor(private _service: Service685Service) { }

  ngOnInit() {
  }

}
