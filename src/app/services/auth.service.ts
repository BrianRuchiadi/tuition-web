import { HttpService } from '@services/http.service';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export default class AuthService {
  constructor(
    private httpS: HttpService
  ) { }


  // getApiVersion(apiBaseurl) {
  //   return this.httpS.get(`/version`, {}, {}, 'public', apiBaseurl);
  // }

  register(payload: any, channel = 'public') {
    return this.httpS.post(`/auth/register`, payload, {}, channel);
  }

  login(payload: any, channel = 'public') {
    return this.httpS.post(`/auth/login`, payload);
  }

  logout() {
    console.log('logout. remove jwt token.');
    localStorage.removeItem('user_id');
    localStorage.removeItem('user_name');
    localStorage.removeItem('jwt_token');
    localStorage.removeItem('permissions');
    localStorage.removeItem('revokedPermissions');
  }

  // changePassword(payload: any, channel = 'public') {
  //   return this.httpS.put(`/auth/change-password`, payload, {}, channel);
  // }

  // resetPassword(payload: any, channel = 'public') {
  //   return this.httpS.put(`/auth/reset-password`, payload, {}, channel);
  // }
}

export { AuthService };
