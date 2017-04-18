import { Component, OnInit } from '@angular/core';
import { Service42Service } from '../../services/service-42.service';

@Component({
  selector: 'app-comp-42',
  templateUrl: './comp-42.component.html',
  styleUrls: ['./comp-42.component.css']
})
export class Comp42Component implements OnInit {

  constructor(private _service: Service42Service) { }

  ngOnInit() {
  }

}
