import React from 'react';

const Area = () => {
    return ( 
        <div class="container">
            <h3>Catalogo Areas</h3>
            <div class="row mt-5">
                <div class="col-sm-4"></div>
                <div class="col-sm-4">
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                            <label for="floatingPassword">Password</label>
                          </div>
                </div>
            </div>
        </div>
     );
}
 
export default Area;