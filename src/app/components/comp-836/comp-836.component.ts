import { Component, OnInit } from '@angular/core';
import { Service836Service } from '../../services/service-836.service';

@Component({
  selector: 'app-comp-836',
  templateUrl: './comp-836.component.html',
  styleUrls: ['./comp-836.component.css']
})
export class Comp836Component implements OnInit {

  constructor(private _service: Service836Service) { }

  ngOnInit() {
  }

}
