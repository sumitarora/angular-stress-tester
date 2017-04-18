import { Component, OnInit } from '@angular/core';
import { Service829Service } from '../../services/service-829.service';

@Component({
  selector: 'app-comp-829',
  templateUrl: './comp-829.component.html',
  styleUrls: ['./comp-829.component.css']
})
export class Comp829Component implements OnInit {

  constructor(private _service: Service829Service) { }

  ngOnInit() {
  }

}
