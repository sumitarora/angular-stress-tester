import { Component, OnInit } from '@angular/core';
import { Service690Service } from '../../services/service-690.service';

@Component({
  selector: 'app-comp-690',
  templateUrl: './comp-690.component.html',
  styleUrls: ['./comp-690.component.css']
})
export class Comp690Component implements OnInit {

  constructor(private _service: Service690Service) { }

  ngOnInit() {
  }

}
