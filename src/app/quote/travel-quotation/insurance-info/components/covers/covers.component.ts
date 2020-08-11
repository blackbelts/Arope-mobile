import { Component, OnInit, Input, ViewChild, Renderer } from '@angular/core';
import { element } from 'protractor';
import { Subscription } from 'rxjs';
import { QuoteService } from 'src/app/quote/quote.service';
import { UIService } from 'src/app/shared/ui.service';

@Component({
  selector: 'app-covers',
  templateUrl: './covers.component.html',
  styleUrls: ['./covers.component.scss'],
})
export class CoversComponent implements OnInit {
  @Input('covers') covers: any[];
  @ViewChild('cc', {static: false}) cardContent: any;
  accordionExpanded: boolean = false;
  fecthCoversSub: Subscription;
  coversArr: any[];
  isLoading: boolean = false;
  isLoadingSub: Subscription;
  constructor(
    private renderer: Renderer,
    private quoteService: QuoteService,
    private uiService: UIService
    ) { }

  ngOnInit() {
    this.coversArr = [
      {
        cover: "list 1",
        limit: "content"
      },
      {
        cover: "list 2",
        limit: "content 2"
      }
    ];
    // this.fecthCoversSub = this.quoteService._fetchCovers.subscribe((covers) => {
    //   this.coversArr = covers;
    // });

    // this.isLoadingSub = this.uiService.loadingChangedStatus.subscribe((res) => {
    //   this.isLoading = res;
    // });

    // this.quoteService.fetchCovers();

  }

  toggleSelection(index) {
    let el :HTMLElement = document.getElementById('item-'+index);
    let elHeader :HTMLElement = document.getElementById('header-'+index);
    if(this.accordionExpanded) {

      el.style.maxHeight = '500px';
      el.style.paddingBottom = '18px';
      el.style.transition = 'all 0.5s';
      elHeader.classList.add('is-active');
    } else {
      el.style.maxHeight = '0px';
      el.style.paddingBottom = '0px';
      el.style.transition = 'all 0.5s';
      elHeader.classList.remove('is-active');
    }

    this.accordionExpanded = !this.accordionExpanded;
  }

}
