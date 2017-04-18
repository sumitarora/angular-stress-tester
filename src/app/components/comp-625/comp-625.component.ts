import { Component, OnInit } from '@angular/core';
import { Service625Service } from '../../services/service-625.service';

@Component({
  selector: 'app-comp-625',
  templateUrl: './comp-625.component.html',
  styleUrls: ['./comp-625.component.css']
})
export class Comp625Component implements OnInit {

  constructor(private _service: Service625Service) { }

  ngOnInit() {
  }

}
