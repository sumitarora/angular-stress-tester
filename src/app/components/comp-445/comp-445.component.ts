import { Component, OnInit } from '@angular/core';
import { Service445Service } from '../../services/service-445.service';

@Component({
  selector: 'app-comp-445',
  templateUrl: './comp-445.component.html',
  styleUrls: ['./comp-445.component.css']
})
export class Comp445Component implements OnInit {

  constructor(private _service: Service445Service) { }

  ngOnInit() {
  }

}
