import { Component, OnInit } from '@angular/core';
import { Service532Service } from '../../services/service-532.service';

@Component({
  selector: 'app-comp-532',
  templateUrl: './comp-532.component.html',
  styleUrls: ['./comp-532.component.css']
})
export class Comp532Component implements OnInit {

  constructor(private _service: Service532Service) { }

  ngOnInit() {
  }

}
