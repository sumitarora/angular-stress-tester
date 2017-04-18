import { Component, OnInit } from '@angular/core';
import { Service117Service } from '../../services/service-117.service';

@Component({
  selector: 'app-comp-117',
  templateUrl: './comp-117.component.html',
  styleUrls: ['./comp-117.component.css']
})
export class Comp117Component implements OnInit {

  constructor(private _service: Service117Service) { }

  ngOnInit() {
  }

}
