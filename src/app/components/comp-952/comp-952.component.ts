import { Component, OnInit } from '@angular/core';
import { Service952Service } from '../../services/service-952.service';

@Component({
  selector: 'app-comp-952',
  templateUrl: './comp-952.component.html',
  styleUrls: ['./comp-952.component.css']
})
export class Comp952Component implements OnInit {

  constructor(private _service: Service952Service) { }

  ngOnInit() {
  }

}
