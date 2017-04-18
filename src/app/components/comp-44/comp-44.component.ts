import { Component, OnInit } from '@angular/core';
import { Service44Service } from '../../services/service-44.service';

@Component({
  selector: 'app-comp-44',
  templateUrl: './comp-44.component.html',
  styleUrls: ['./comp-44.component.css']
})
export class Comp44Component implements OnInit {

  constructor(private _service: Service44Service) { }

  ngOnInit() {
  }

}
