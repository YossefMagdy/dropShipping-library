import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Enviroment } from '../../entites/enviroment/enviroment';
import { CategoryResponse } from '../../entites/model/getCategories.model';
import { baseResponse } from '../../entites/model/apiResponse.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(   
     private http: HttpClient,
  ) { }


  getCategories():Observable<baseResponse<CategoryResponse[]>>{
    return this.http.get<baseResponse<CategoryResponse[]>>(`${Enviroment.apiUrl}/product/products/getCategories`,{
      headers:{
        'CJ-Access-Token':'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxNzE0NSIsInR5cGUiOiJBQ0NFU1NfVE9LRU4iLCJzdWIiOiJicUxvYnFRMGxtTm55UXB4UFdMWnlrSXRkcFh6cDM4dlF6YU5oZ2hQUVpmTzVwVDhydUJQM1d5TEh3YUdpQUpoL3g5b3ZnTTdzRnp2M3dyeHlTRVg3N1FTbXFjN0tvSXlDVVhtdy9KelBZT2RQZFJGVlMrU2hvUm1KWjd1VjBVM1N5T3V2SGt6R3NlL0l5aEN0WlpvTUZKTkVkalRKeDdrNDcrM2FvajFocFhCSm1wNkU2ZkdRdk5VT2VBVndZZGVDQ3RVR1NuTnoyR0JTMzM2UGd1U2lvT2o3ZW1laFNzdEpxR243MW5IdmoxQnRZQXora2srV29CVzJ0c0d3WVFoa0czZlpmejZWQzMxU2NqTDArL291TDV1SmRReW9BTjZpTzVma1Y1THhHSVdiZ3BrcFczZjJwQ1I1Y0ZqZm0weCJ9.ovC9RaH8fE1RUJV72UsN8-2TTjc--f48Cod5V2mJxQs'
      }
    })
  }
}
