import { Component, OnInit } from '@angular/core';
import { Service979Service } from '../../services/service-979.service';

@Component({
  selector: 'app-comp-979',
  templateUrl: './comp-979.component.html',
  styleUrls: ['./comp-979.component.css']
})
export class Comp979Component implements OnInit {

  constructor(private _service: Service979Service) { }

  ngOnInit() {
  }

}
