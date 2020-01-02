import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { WeatherStoreService } from 'src/app/services/weather-store.service';
import { Autocomplete } from '../../../models/autocomplete.model';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

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

  search(): void {
    if(this.searchInput.nativeElement.value.length >= 0){
      this.onSearch = true;
      this.resultSearch = [];
    }
    if (this.searchInput.nativeElement.value.length >= 2) {
      this.apiService.autocomplete(this.searchInput.nativeElement.value).subscribe(res => {
        this.onSearch = false;
        this.resultSearch = res;
      });
    }
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
