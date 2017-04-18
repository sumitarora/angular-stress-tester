import { Component, OnInit } from '@angular/core';
import { Service173Service } from '../../services/service-173.service';

@Component({
  selector: 'app-comp-173',
  templateUrl: './comp-173.component.html',
  styleUrls: ['./comp-173.component.css']
})
export class Comp173Component implements OnInit {

  constructor(private _service: Service173Service) { }

  ngOnInit() {
  }

}
