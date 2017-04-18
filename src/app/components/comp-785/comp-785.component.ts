import { Component, OnInit } from '@angular/core';
import { Service785Service } from '../../services/service-785.service';

@Component({
  selector: 'app-comp-785',
  templateUrl: './comp-785.component.html',
  styleUrls: ['./comp-785.component.css']
})
export class Comp785Component implements OnInit {

  constructor(private _service: Service785Service) { }

  ngOnInit() {
  }

}
