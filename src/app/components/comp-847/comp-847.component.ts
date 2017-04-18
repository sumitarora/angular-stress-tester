import { Component, OnInit } from '@angular/core';
import { Service847Service } from '../../services/service-847.service';

@Component({
  selector: 'app-comp-847',
  templateUrl: './comp-847.component.html',
  styleUrls: ['./comp-847.component.css']
})
export class Comp847Component implements OnInit {

  constructor(private _service: Service847Service) { }

  ngOnInit() {
  }

}
