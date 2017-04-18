import { Component, OnInit } from '@angular/core';
import { Service705Service } from '../../services/service-705.service';

@Component({
  selector: 'app-comp-705',
  templateUrl: './comp-705.component.html',
  styleUrls: ['./comp-705.component.css']
})
export class Comp705Component implements OnInit {

  constructor(private _service: Service705Service) { }

  ngOnInit() {
  }

}
