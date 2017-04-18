import { Component, OnInit } from '@angular/core';
import { Service172Service } from '../../services/service-172.service';

@Component({
  selector: 'app-comp-172',
  templateUrl: './comp-172.component.html',
  styleUrls: ['./comp-172.component.css']
})
export class Comp172Component implements OnInit {

  constructor(private _service: Service172Service) { }

  ngOnInit() {
  }

}
