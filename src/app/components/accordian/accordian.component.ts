import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.scss'],
})
export class AccordianComponent implements OnInit {

  @Input() accordIsShow: boolean = false
  @Input() noMarginBottom: boolean = false
  @Input() accordLook: string = 'look-one'
  @Input() accordHeader: string
  @Input() accordSubHead: string


  toggleContent(ev: KeyboardEvent): void {
    this.accordIsShow = !this.accordIsShow
  }
  constructor() { }

  ngOnInit() { }

}
