import { Component, OnInit } from '@angular/core';
import { Service223Service } from '../../services/service-223.service';

@Component({
  selector: 'app-comp-223',
  templateUrl: './comp-223.component.html',
  styleUrls: ['./comp-223.component.css']
})
export class Comp223Component implements OnInit {

  constructor(private _service: Service223Service) { }

  ngOnInit() {
  }

}
