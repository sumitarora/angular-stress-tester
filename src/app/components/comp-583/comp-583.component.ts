import { Component, OnInit } from '@angular/core';
import { Service583Service } from '../../services/service-583.service';

@Component({
  selector: 'app-comp-583',
  templateUrl: './comp-583.component.html',
  styleUrls: ['./comp-583.component.css']
})
export class Comp583Component implements OnInit {

  constructor(private _service: Service583Service) { }

  ngOnInit() {
  }

}
