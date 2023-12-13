import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';

export const addTokenInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('request originale', req);

  if(req.method == "GET")
    return next(req);

  else {
    let token = localStorage.getItem('myToken');
    if(token){
      let cloneReq = req.clone({
        headers : new HttpHeaders().set('Authorization', `bearer ${token}`)
      })
      console.log('request clonée', cloneReq);
      
      return next(cloneReq);
    }
    return next(req);

  }
};

