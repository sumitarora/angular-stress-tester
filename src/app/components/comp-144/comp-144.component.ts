import { Component, OnInit } from '@angular/core';
import { Service144Service } from '../../services/service-144.service';

@Component({
  selector: 'app-comp-144',
  templateUrl: './comp-144.component.html',
  styleUrls: ['./comp-144.component.css']
})
export class Comp144Component implements OnInit {

  constructor(private _service: Service144Service) { }

  ngOnInit() {
  }

}
