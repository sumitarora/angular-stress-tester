import { Component, OnInit } from '@angular/core';
import { Service244Service } from '../../services/service-244.service';

@Component({
  selector: 'app-comp-244',
  templateUrl: './comp-244.component.html',
  styleUrls: ['./comp-244.component.css']
})
export class Comp244Component implements OnInit {

  constructor(private _service: Service244Service) { }

  ngOnInit() {
  }

}
