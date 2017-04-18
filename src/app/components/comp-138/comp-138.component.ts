import { Component, OnInit } from '@angular/core';
import { Service138Service } from '../../services/service-138.service';

@Component({
  selector: 'app-comp-138',
  templateUrl: './comp-138.component.html',
  styleUrls: ['./comp-138.component.css']
})
export class Comp138Component implements OnInit {

  constructor(private _service: Service138Service) { }

  ngOnInit() {
  }

}
