import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }

  getPersons()
  {
    return this.httpClient.get('http://127.0.0.1:8000/api/People');
  }

  insertPerson(data:any)
  {
    return this.httpClient.post('http://127.0.0.1:8000/api/AddPerson',data);
  }

  deletePerson(id:any)
  {
    return this.httpClient.delete('http://127.0.0.1:8000/api/DeletePerson/'+id);
  }

  getPeronById(id:any)
  {
    return this.httpClient.get('http://127.0.0.1:8000/api/Person/'+id);
  }

  updatePerson(id:any,data:any)
  {
    return this.httpClient.put('http://127.0.0.1:8000/api/UpdatePerson/'+id,data);
  }
}
