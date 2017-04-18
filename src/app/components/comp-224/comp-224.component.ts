import { Component, OnInit } from '@angular/core';
import { Service224Service } from '../../services/service-224.service';

@Component({
  selector: 'app-comp-224',
  templateUrl: './comp-224.component.html',
  styleUrls: ['./comp-224.component.css']
})
export class Comp224Component implements OnInit {

  constructor(private _service: Service224Service) { }

  ngOnInit() {
  }

}
