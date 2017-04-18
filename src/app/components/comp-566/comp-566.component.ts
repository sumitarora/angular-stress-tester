import { Component, OnInit } from '@angular/core';
import { Service566Service } from '../../services/service-566.service';

@Component({
  selector: 'app-comp-566',
  templateUrl: './comp-566.component.html',
  styleUrls: ['./comp-566.component.css']
})
export class Comp566Component implements OnInit {

  constructor(private _service: Service566Service) { }

  ngOnInit() {
  }

}
