import { Component, OnInit } from '@angular/core';
import { Service892Service } from '../../services/service-892.service';

@Component({
  selector: 'app-comp-892',
  templateUrl: './comp-892.component.html',
  styleUrls: ['./comp-892.component.css']
})
export class Comp892Component implements OnInit {

  constructor(private _service: Service892Service) { }

  ngOnInit() {
  }

}
