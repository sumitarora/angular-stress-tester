import { Component, OnInit } from '@angular/core';
import { Service796Service } from '../../services/service-796.service';

@Component({
  selector: 'app-comp-796',
  templateUrl: './comp-796.component.html',
  styleUrls: ['./comp-796.component.css']
})
export class Comp796Component implements OnInit {

  constructor(private _service: Service796Service) { }

  ngOnInit() {
  }

}
