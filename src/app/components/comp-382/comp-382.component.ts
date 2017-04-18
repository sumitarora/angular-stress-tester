import { Component, OnInit } from '@angular/core';
import { Service382Service } from '../../services/service-382.service';

@Component({
  selector: 'app-comp-382',
  templateUrl: './comp-382.component.html',
  styleUrls: ['./comp-382.component.css']
})
export class Comp382Component implements OnInit {

  constructor(private _service: Service382Service) { }

  ngOnInit() {
  }

}
