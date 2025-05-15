import React from "react";
import'./Header.css';

const Header=()=>{
    return(
        <header>
            <div className='container'>
                <div className='col-md-6'>
                   <h2>.الخيارات الغذائية السليمة هي استثمار حقيقي في صحتك</h2>
                   <p>.الصحة تبدا من الطبق فاختر مايغذي جسمك ويقوي مناعتك</p>
                   <button>اطلب الان </button>
                    <button>اعرف المزيد</button>

                </div>
                <div className='col-md-6'>
                 
                </div>
            </div>
        </header>

    )  
}
export default Header;