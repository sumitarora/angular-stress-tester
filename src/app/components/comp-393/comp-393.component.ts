import { Component, OnInit } from '@angular/core';
import { Service393Service } from '../../services/service-393.service';

@Component({
  selector: 'app-comp-393',
  templateUrl: './comp-393.component.html',
  styleUrls: ['./comp-393.component.css']
})
export class Comp393Component implements OnInit {

  constructor(private _service: Service393Service) { }

  ngOnInit() {
  }

}
