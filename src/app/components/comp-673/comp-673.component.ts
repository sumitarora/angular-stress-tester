import { Component, OnInit } from '@angular/core';
import { Service673Service } from '../../services/service-673.service';

@Component({
  selector: 'app-comp-673',
  templateUrl: './comp-673.component.html',
  styleUrls: ['./comp-673.component.css']
})
export class Comp673Component implements OnInit {

  constructor(private _service: Service673Service) { }

  ngOnInit() {
  }

}
