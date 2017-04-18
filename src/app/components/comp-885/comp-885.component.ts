import { Component, OnInit } from '@angular/core';
import { Service885Service } from '../../services/service-885.service';

@Component({
  selector: 'app-comp-885',
  templateUrl: './comp-885.component.html',
  styleUrls: ['./comp-885.component.css']
})
export class Comp885Component implements OnInit {

  constructor(private _service: Service885Service) { }

  ngOnInit() {
  }

}
