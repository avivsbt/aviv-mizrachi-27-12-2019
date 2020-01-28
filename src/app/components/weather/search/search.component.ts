import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { WeatherStoreService } from 'src/app/services/weather-store.service';
import { Autocomplete } from '../../../models/autocomplete.model';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { debounceTime, map, distinctUntilChanged, filter } from 'rxjs/operators';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit, AfterViewInit {

  @ViewChild('searchInput', { static: false }) searchInput: ElementRef;
  public faTimes = faTimes;
  public resultSearch: Autocomplete[] = [];
  public onSearch: boolean = true;

  constructor(
    private apiService: ApiService,
    private weatherStoreService: WeatherStoreService
  ) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.search();
  }

  search(): void {
    let regex = new RegExp(/^[a-zA-Z\s]*$/);
    fromEvent(this.searchInput.nativeElement, 'keyup').pipe(
      map((event: any) => {
        if (event.target.value.length <= 2) {
          this.onSearch = true;
          this.resultSearch = [];
        }
        return event.target.value;
      })
      , filter(res => res.length > 2 && regex.test(res))
      , debounceTime(1000)
      , distinctUntilChanged()
    ).subscribe((text: string) => {
      this.apiService.autocomplete(text).subscribe((res) => {
        this.onSearch = false;
        this.resultSearch = res;
      });
    });
  }

  clearSearch(): void {
    this.onSearch = true;
    this.resultSearch = [];
    this.searchInput.nativeElement.value = '';
  }

  selectSearch(key: string, LocalizedName: string, Country: string) {
    this.clearSearch();
    this.weatherStoreService.fetch(key, LocalizedName, Country);
  }

}
