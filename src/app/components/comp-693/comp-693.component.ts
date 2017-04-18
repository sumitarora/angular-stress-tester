import { Component, OnInit } from '@angular/core';
import { Service693Service } from '../../services/service-693.service';

@Component({
  selector: 'app-comp-693',
  templateUrl: './comp-693.component.html',
  styleUrls: ['./comp-693.component.css']
})
export class Comp693Component implements OnInit {

  constructor(private _service: Service693Service) { }

  ngOnInit() {
  }

}
