import { Component, OnInit } from '@angular/core';
import { Service664Service } from '../../services/service-664.service';

@Component({
  selector: 'app-comp-664',
  templateUrl: './comp-664.component.html',
  styleUrls: ['./comp-664.component.css']
})
export class Comp664Component implements OnInit {

  constructor(private _service: Service664Service) { }

  ngOnInit() {
  }

}
